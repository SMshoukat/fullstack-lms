import { StudentTable } from "@/components/DataTables/StudentTable";
import { StudentModal } from "@/components/Dialogs/StudentModal";

export default function Courses() {
  return (
    <div className="min-h-screen p-10">
      <div className="flex justify-between my-2">
      <h1 className="text-3xl font-bold text-center">Student</h1>
      <StudentModal/>

      </div>
     <StudentTable/>
    </div>
  );
}