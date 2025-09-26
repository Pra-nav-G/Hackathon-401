"use client";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Topbar.module.css";
import { FaHome, FaFileAlt, FaCog, FaEnvelope, FaBell, FaUserCircle, FaUser, FaComments } from "react-icons/fa";

export default function Topbar() {
  // Use a state variable to manage the active path
  const [activePath, setActivePath] = useState("/");
  const [showNotifications, setShowNotifications] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Applications", path: "/applications", icon: <FaFileAlt /> },
    { name: "Resume", path: "/resume", icon: <FaUser /> },
    { name: "Messages", path: "/messages", icon: <FaComments /> },
  ];

  const rightNavItems = [
    { name: "Notifications", path: "/notifications", icon: <FaBell />, isNotification: true },
    { name: "Profile", path: "/profile", icon: <FaUserCircle /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
  ];

  return (
    <div className={styles.topbar}>
      <div className={styles.leftSection}>
        <h2 className={styles.logo}>Jopper</h2>
        <nav className={styles.mainNav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => {
                setActivePath(item.path);
                setShowNotifications(false);
              }}
              className={`${styles.navItem} ${
                activePath === item.path ? styles.active : ""
              }`}
            >
              {item.icon}
              <span className={styles.navLabel}>{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.rightSection}>
        {rightNavItems.map((item) =>
          item.isNotification ? (
            <div
              key={item.path}
              className={`${styles.navItem} ${
                activePath === item.path ? styles.active : ""
              }`}
              onClick={() => setShowNotifications(!showNotifications)}
            >
              {item.icon}
            </div>
          ) : (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => {
                setActivePath(item.path);
                setShowNotifications(false);
              }}
              className={`${styles.navItem} ${
                activePath === item.path ? styles.active : ""
              }`}
            >
              {item.icon}
            </Link>
          )
        )}
      </div>

      {showNotifications && (
        <div className={styles.notificationPopup}>
          <h4>Notifications</h4>
          <ul>
            <li>You have a new message from Maria.</li>
            <li>You have a new message from Maria.</li>
            <li>You have a new message from Maria.</li>
            <li>You have a new message from Maria.</li>
          </ul>
        </div>
      )}
    </div>
  );
}