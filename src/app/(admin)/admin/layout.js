import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"



export default function Layout({children}){
    return(
        <div>
        
        <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="w-full">

                <Link href={`/admin/dashboard`}>
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                </Link>

                <Link href={`/admin/courses`}>
                <TabsTrigger value="courses">Courses</TabsTrigger>
                </Link>

                <Link href={`/admin/batches`}>
                <TabsTrigger value="batches">Batches</TabsTrigger>
                </Link>

                <Link href={`/admin/trainers`}>
                <TabsTrigger value="trainers">trainers</TabsTrigger>
                </Link>

                <Link href={`/admin/student`}>
                <TabsTrigger value="student">Student</TabsTrigger>
                </Link>
                    
            </TabsList>
            <TabsContent value="dashboard">{children} </TabsContent>
            <TabsContent value="courses">{children} </TabsContent>
            <TabsContent value="batches">{children} </TabsContent>
            <TabsContent value="trainers">{children} </TabsContent>
            <TabsContent value="student">{children} </TabsContent>
        </Tabs>

        </div>
    )
}