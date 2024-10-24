import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Layout({children}) {
    return (
        <div>
    <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>

        </div>
    );
  }