import '@/app/ui/global.css';
// 引入字体类
import {inter} from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        {/* 添加字体类 */}
        <body className={inter.className}>{children}</body>
    </html>
  );
}
