"use client";
import {Avatar, DarkThemeToggle, Dropdown, Navbar} from "flowbite-react";
import Image from "next/image";

export default function Layout() {
  return (
    <div>
      <Navbar fluid>
        <Navbar.Brand href="https://flowbite-react.com">
          <picture>
            <img
              alt="Flowbite React Logo"
              className="mr-3 w-10"
              width="100"
              height="100"
              src="https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png"
            />
          </picture>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active href="#">
            <p>Home</p>
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar>
    </div>
  );
}
