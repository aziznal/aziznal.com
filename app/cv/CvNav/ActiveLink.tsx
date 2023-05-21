"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./CvNav.module.scss";

export default function ActiveLink({
    href,
    children,
    className,
}: {
    href: string;
    children: React.ReactNode;
    className?: string;
}) {
    const pathname = usePathname();

    return (
        <Link
            className={`
        ${styles["nav-link"]}
        ${pathname === href ? styles["highlighted"] : null}
        ${className}
        `}
            href={href}
        >
            {children}
        </Link>
    );
}
