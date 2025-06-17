import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kalvin Chakma",
  description:
    "Kalvin Chakma portfolio showcasing projects, skills, notes, educations and experience in web development and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className=" min-h-screen">{children}</div>;
}
