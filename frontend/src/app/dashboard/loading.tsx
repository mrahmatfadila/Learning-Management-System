import DevGrowLoader from '@/components/DevGrowLoader';

export default function DashboardLoading() {
  return (
    <DevGrowLoader
      message="Memuat Dashboard DevGrow..."
      subtitle="Menyiapkan data kursus & kurikulum interaktif"
      fullScreen={true}
    />
  );
}
