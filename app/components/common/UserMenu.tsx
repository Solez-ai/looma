"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function UserMenu() {
  const t = useTranslations('userMenu');

  return (
    <div className="flex items-center gap-2 sm:gap-4 h-11">
      <Button variant="primary" asChild>
        <Link
          href="/editor"
          className="flex items-center gap-2 text-md font-medium text-white hover:text-white/90 transition-colors"
        >
          <Icon icon="solar:video-frame-cut-2-linear" className="size-4" aria-hidden="true" />
          <span>{t('editor')}</span>
        </Link>
      </Button>
    </div>
  );
}