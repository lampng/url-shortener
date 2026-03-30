import Tablelink from '@/components/tablelink';
import { AuroraText } from '@/components/ui/aurora-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Highlighter } from '@/components/ui/highlighter';
import { Input } from '@/components/ui/input';
import { LinkIcon } from 'lucide-react';
export default function Home() {
    return (
        

        


        <main className="min-h-screen sm:items-start mx-auto  py-12 px-6  sm:py-24">
            {/* Title */}
            <section className=" max-w-2xl justify-self-center text-center space-y-2.5">
                <AuroraText className="text-5xl">Shorten Your Loooong Links :)</AuroraText>
                <p className="text-muted-foreground px-15">
                    <Highlighter action="underline" color="#FF9800">
                        Linkly
                    </Highlighter>{' '}
                    is an efficient and easy-to-use
                    <Highlighter action="highlight" color="#87CEFA">
                        URL shortening{' '}
                    </Highlighter>{' '}
                    service that streamlines your online experience.
                </p>
                {/* Shorter box */}
                <Card className="relative w-full overflow-hidden rounded-4xl">
                    <div className="flex">
                        <LinkIcon />
                        <Input id="loong-link" className="border-none" placeholder="Paste url here" />
                        <Button variant="default" className="rounded-4xl">
                            Shorten now!
                        </Button>
                    </div>
                    <BorderBeam duration={8} size={100} />
                </Card>
            </section>

            {/* Shortener History */}
            <section className="mx-28 my-10">
                <Tablelink />
            </section>
        </main>
    );
}
