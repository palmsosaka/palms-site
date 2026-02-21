import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center">
      <div className="px-4 text-center">
        <p className="mb-4 text-6xl font-bold text-muted">404</p>
        <h1 className="mb-4 text-2xl font-bold">
          ページが見つかりません
        </h1>
        <p className="mb-8 text-muted">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-accent px-6 py-3 font-bold text-white hover:opacity-90"
          >
            トップページへ
          </Link>
          <Link
            href="/emergency/"
            className="rounded-full bg-emergency px-6 py-3 font-bold text-white hover:bg-emergency-dark"
          >
            緊急対応はこちら
          </Link>
        </div>
      </div>
    </section>
  );
}
