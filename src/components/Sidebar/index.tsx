"use client";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Sidebar } from "flowbite-react";

export default function SidebarNew() {
  return (
    <Sidebar aria-label="Default sidebar example" theme={{
      root: {
        inner: 'h-full bg-white dark:bg-gray-800',
      }
    }}>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            <p>Dashboard</p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiViewBoards}
            label="Pro"
          >
            <p>Kanban</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            <p>Inbox</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            <p>Users</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            <p>Products</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <p>Sign In</p>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            <p>Sign Up</p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
