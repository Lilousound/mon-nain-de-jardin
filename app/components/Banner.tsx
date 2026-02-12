import '../styles/Banner.css'
import { BannerProps } from '../types'


function Banner({ children }: BannerProps) {
    return <div className="banner">{children}</div>
}
export default Banner
