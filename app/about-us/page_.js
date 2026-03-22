import dynamic from 'next/dynamic';
import AboutUs from '@/components/About_Client';
// This tells Next.js: "Don't even try to run this on the server"
const AboutUs = dynamic(() => import('@/components/About_Client'), {
        ssr: false
});

export default function Page () {
        return <AboutUs />;
}