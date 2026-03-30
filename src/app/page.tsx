'use client';

import Tablelink from '@/components/tablelink';
import { AuroraText } from '@/components/ui/aurora-text';
import { BorderBeam } from '@/components/ui/border-beam';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Highlighter } from '@/components/ui/highlighter';
import { Input } from '@/components/ui/input';
import { LinkIcon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useState } from 'react';

export default function Home() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePaste = async () => {
    try {
      setLoading(true);
      const text = await navigator.clipboard.readText();
      setValue(text);
    } catch (err) {
      console.error('Clipboard error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFocus = async () => {
    if (!checked) return;
    await handlePaste();
  };

  return (
    <main className="min-h-screen px-6 py-12 sm:items-start sm:py-24">
      <section className="max-w-2xl justify-self-center space-y-2.5 text-center">
        <AuroraText className="text-5xl">Shorten Your Loooong Links :)</AuroraText>

        <p className="text-muted-foreground px-15">
          <Highlighter action="underline" color="#FF9800">
            Linkly
          </Highlighter>{' '}
          is an efficient and easy-to-use
          <Highlighter action="highlight" color="#87CEFA">
            URL shortening
          </Highlighter>{' '}
          service that streamlines your online experience.
        </p>

        <Card className="relative w-full overflow-hidden rounded-4xl">
          <div className="flex items-center gap-2 p-2">
            <LinkIcon className="ml-2 size-4 shrink-0" />

            <Input
              id="loong-link"
              className="border-none shadow-none focus-visible:ring-0"
              placeholder="Paste url here"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={handleFocus}
            />

            <Button
              type="button"
              variant="default"
              className="rounded-4xl"
              onClick={handlePaste}
              disabled={loading}
            >
              {loading ? 'Pasting...' : 'Shorten now!'}
            </Button>
          </div>

          <BorderBeam duration={8} size={100} />
        </Card>

        <div className="flex items-center justify-center space-x-2">
          <Switch
            id="paste-clipboard"
            checked={checked}
            onCheckedChange={setChecked}
          />
          <Label htmlFor="paste-clipboard">Auto Paste from Clipboard</Label>
        </div>
      </section>

      <section className="mx-28 my-10">
        <Tablelink />
      </section>
    </main>
  );
}