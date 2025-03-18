"use client"
import React, { useEffect, useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash } from "lucide-react";
import SidebarLayout from "@/components/custom/SidebarLayout";
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const PageShoppingHome = () => {
    const [items, setItems] = useState<{ id: string; name: string; quantity: number }[]>([]);
    const [newItem, setNewItem] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchItems = async () => {
            const { data, error } = await supabase.from("shopping").select("id, name, quantity");
            if (!error) {
                setItems(data);
            }
        };
        fetchItems();
    }, []);

    const addItem = async () => {
        if (newItem.trim() !== "") {
            const { data, error } = await supabase
                .from("shopping")
                .insert([{ name: newItem.trim(), quantity }])
                .select();

            if (!error && data) {
                setItems([...items, data[0]]);
                setNewItem("");
                setQuantity(1);
            }
        }
    };

    const removeItem = async (itemId: string) => {
        await supabase.from("shopping").delete().match({ id: itemId });
        setItems(items.filter(item => item.id !== itemId));
    };

    return (
        <div className="flex flex-col md:flex-row w-full h-screen">
            <SidebarLayout/>
            <div className="flex flex-1 flex-col mx-4 bg-white p-6">
                <h2 className="text-2xl font-bold mb-4">Shopping List</h2>
                <div className="flex gap-2 mb-4">
                    <Input
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Add an item..."
                        className="flex-grow"
                    />
                    <Input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        placeholder="Qty"
                        className="w-16"
                    />
                    <Button onClick={addItem} className="bg-emerald-500 hover:bg-emerald-600">Add</Button>
                </div>
                <div className="space-y-2">
                    {items.map((item) => (
                        <Card key={item.id}
                              className="flex justify-between items-center p-2 border border-gray-200 rounded-md">
                            <div className="flex items-center gap-4 w-full justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id={item.id}
                                        className="rounded-full data-[state=checked]:border-emerald-500 data-[state=checked]:bg-emerald-500"
                                    />
                                    <Label htmlFor={item.id} className="relative text-sm">
                                        {item.name} (x{item.quantity})
                                    </Label>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)}>
                                    <Trash className="w-4 h-4 text-red-500"/>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PageShoppingHome;