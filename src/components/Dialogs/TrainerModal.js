"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Mock data for Trainer and Course Select dropdowns

export function TrainerModal() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Trainer</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Trainer</DialogTitle>
          </DialogHeader>
          <BatchForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Trainer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Trainer</DrawerTitle>
        </DrawerHeader>
        <BatchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function BatchForm({ className }) {
  return (
    <form className={cn("grid items-start gap-1", className)}>
      {/* Batch Name Field */}
      <div className="grid gap-1">
        <Label htmlFor="firstName">First Name</Label>
        <Input required type="text" id="firstName" defaultValue="" />
      </div>
      
      <div className="grid gap-1">
        <Label htmlFor="lastname">Last Name</Label>
        <Input required type="text" id="lastname" defaultValue="" />
      </div>
      
      <div className="grid gap-1">
        <Label htmlFor="education">Education</Label>
        <Input required type="text" id="education" defaultValue="" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="cnic">CNIC</Label>
        <Input required type="number" id="cnic" defaultValue="" />
      </div>

      <div className="grid gap-1">
        <Label htmlFor="email">Email</Label>
        <Input required type="email" id="email" defaultValue="" />
      </div>        

      <div className="grid gap-1">
        <Label htmlFor="profile">Profile</Label>
        <Input required type="file" id="profile" defaultValue="" />
      </div>       

      <div className="grid gap-1">
        <Label htmlFor="address">Address</Label>
        <Input required type="email" id="address" defaultValue="" />
      </div> 

      {/* Status Field */}
      <div className="grid gap-2">
        <Label htmlFor="status">Gender</Label>
        <Select required>
          <SelectTrigger>
            <SelectValue placeholder="Male /Female /Others" />

          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit">Add Trainer</Button>
    </form>
  )
}
