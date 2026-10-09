'use client';

import { useState } from 'react';
import { gettingStartedGuide } from '@/lib/getting-started';

/** Copy the prompt displayed in the server-rendered guide; no separate prompt text is maintained. */
export function CopyAgentPrompt({ locale }: { locale: string }) {
  const guide = gettingStartedGuide(locale);
  const text = locale === 'zh'
    ? { button: '复制 Agent 提示词', raw: '阅读 Markdown', missing: '提示词暂不可用，请选择并复制下方文本。', copied: '提示词已复制，请先替换 [产品] 再使用。', denied: '无法自动复制，请选择并复制下方提示词。' }
    : { button: 'Copy Agent prompt', raw: 'Read Markdown', missing: 'The prompt is unavailable. Select and copy the text below.', copied: 'Agent prompt copied. Replace [product] before using it.', denied: 'Copy was unavailable. Select and copy the prompt below.' };
  const [status, setStatus] = useState('');
  const [pending, setPending] = useState(false);

  async function copy() {
    const prompt = document.getElementById('getting-started-content')?.querySelector('pre code')?.textContent;
    if (!prompt) {
      setStatus(text.missing);
      return;
    }
    setPending(true);
    try {
      await navigator.clipboard.writeText(prompt);
      setStatus(text.copied);
    } catch {
      setStatus(text.denied);
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="pcr-front not-prose">
      <div className="pcr-hero-actions">
        <button type="button" className="pcr-action pcr-action--primary" onClick={copy} disabled={pending} aria-controls="getting-started-content">
          {text.button}
        </button>
        <a className="pcr-action" href={guide.rawUrl}>{text.raw}</a>
      </div>
      <p role="status" aria-live="polite">{status}</p>
    </div>
  );
}
