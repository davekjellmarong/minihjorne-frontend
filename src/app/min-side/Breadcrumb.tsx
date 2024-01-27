"use client"
// import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Breadcrumb = () => {

        const pathname = usePathname()
        const pathnames = pathname.split('/').filter((x) => x);

    return (
        <div className="p-4 text-gray-500">
            <Link href="/">
                <span className="text-purple-500 text-sm italic hover:text-purple-700 transition-colors">Home</span>
            </Link>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                    <span key={to} className="mx-2">
                        {'> '}
                        <Link href={to}>
                            <span className="text-purple-500 text-sm italic hover:text-purple-700 transition-colors">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                        </Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumb;