import DevGrowLoader from '@/components/DevGrowLoader';

export default function RootLoading() {
  return (
    <DevGrowLoader
      message="Memuat DevGrow E-Learning..."
      subtitle="Menghubungkan ke platform pembelajaran terdepan"
      fullScreen={true}
    />
  );
}
