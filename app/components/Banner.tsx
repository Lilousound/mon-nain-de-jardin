import '../styles/Banner.css'

interface BannerProps {
  children: React.ReactNode;
}

function Banner({ children }: BannerProps) {
    return <div className="banner">{children}</div>
}
export default Banner
