import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole custom designs at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://www.svgrepo.com/show/99565/id-card.svg"
                alt=""
              />
              <div className="line"></div>
              <span>ID Cards</span>
            </div>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6lRnqN8RbP3vsqZIIgmElhi-qq31CMCBQvZWj7fNPEA&s"
                alt=""
              />
              <div className="line"></div>

              <span>Visiting Cards</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAY1BMVEX///8AAAD29vYlJSXv7+8zMzMKCgodHR0TExP5+fnn5+fi4uK/v78pKSkwMDDOzs44ODiHh4efn5+zs7NHR0dubm6SkpJiYmJdXV2ZmZnW1tZ3d3fHx8dnZ2dYWFhMTEyoqKgtpgqaAAADF0lEQVRoge2b6XqqMBCGBSIQFgVFtLje/1VWzAZJBhKtts858/1qk8m8ZJlklLhYoFC/JBqG9J32dq3bfRWn1aEunJzRoj709vt6/RJ2kwRKu272KXcD8/TraWwRaGom0V2l25+e49a6n7uOBLImR4t5/QzX5igISqAXp8hqfvTntqr1cjX0ZZ26r6HF0N67z3J+z6eckHxdL6WvnWmtRmdVr3v7014UFH7ckD+0Wk7hthS+Lrr1RfZ1G4qyruFzE+rWk9qwVodRoRz969i4EeXtKNYPrHDjw6VsYCutOBdhPerzlRfGuWbOhij1AZ+YK93Tgp7NeRZFB914kfvPcg2tIhncrSgQ428LnP3Y1EEN/KgCtGX/itVvDRtW2XiA2Zq271K8z+ljHvJ0gitq3bm0nGrAJ/XRkYsx5UOF0Y+C+Wrt44RHXQPEqjeYDzUU+hmfVyL+yABD76GeWly9tnwhn2fixX9xweHENDzwgzNodvEOpzVzaWwgQmSYmYCbccfqfdIBvmU2YJ51U9wb6IWtFK8tUyzXM9QbKg8GfT9XJvxk9Eu9Qn78XqEsS57XW8BAHIuryez0ngqPpRzvCr2uFyU8s6uI0fYuUuzUgxm1ituWia4yVrOYGrVJEvG9Mo4slYO2sek6kst8lDB9QoKcfhoc8dH+NDeI/wZ46SDI0tnDKjbAUUZmlbFjjrqWm8pXJtjhYyh0TlPnc5csTbBD4g0B3A98BCMYwf8kuHRotgB2LncwrQywhyCws/4/sPgMkMxb/ixYpLybT4NlmlmXUcTbRpOaBpdTTUvlf/j1wT0HfyQly8yWn8s8fSacJpqGJBX+9cYMDH472wvKQFziOEwB/07gF3YuBCMYwQhGMIIRjGAEIxjBCEYwghGMYAQjGMEIRjCCEYxgBH8W/Kgo3wamD5PK9E/Z/WzoCh6zeeGFF7tEerXU8FvENzL/is8on33FR8TlVQuYX98MktmXmubLS6hcSrwptl56lHf/36e9dRbI+8HAteQunm/6ksDf8GRvHe1mKlS7tpn38ITipjV/efUNpAw2/O0fnp4AAAAASUVORK5CYII="
                alt=""
              />
              <div className="line"></div>
              <span>Personalized Gifts</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAACKCAMAAAB8UI9dAAAAY1BMVEX///8AAABgYGBqamp4eHg4ODjDw8OysrLX19ft7e0zMzPw8PD39/dJSUmTk5NxcXF+fn7m5uZQUFCdnZ3MzMwVFRUuLi6NjY2FhYWlpaVWVlY9PT25ubkgICApKSne3t4NDQ2zz2ExAAAD/0lEQVRoge2b6bqqIBSGMTUnsGywzKb7v8qjMggbRegsPe3n+P3JEniZ1mKBhlD18BbS+YhQtBSsVYT8JXE+2iyJ2/wTXLoPZtY+lXA7NLt2Es6fH+evuBX3N7gMWEbciYSwSslpHFec4f3WuxjFbeFpnrf9n3GP3EnHRmP3Hha40MmciuiS34uRm6EFLsX2sJgtzv4gEAPjKm2E5sQpQdxJvw+LK5QJ+Mi0BLC4a5v6GSUJ7dPjvDhMmsTnWOS7zYvr+jKg120hz2RW3KtNXNHrtl/PmjHA4659WTO3LqtbRtek0wJjh/Zt6vqUZdtne5XPjGN2l5bdx1vrS2ivcpTN/K7fh/aZ156mGzk8Dm1DCiMDHnMGHMJxHgTHeOQmOM5cl09x+D7SgFlwcRN/+u6N/hB396Q0Doq9T3A5m+tXR1qSfoLbC9uq9CKrmgzYN9XBc8dh+ZhHs65opBatdp47LjtINH1Jo9015FF6D+eAS0qWJ6AfPzua3dUXA7omOeJePEvEQ0p1UROxmDaLYs8dJ2rYjhlzx3u50H4LE6i04umO44XRaIsfDcoDJUXRCg/f6I82WxKO4zHyk82PjCi1RUhZgLxAGlY2KSNij+M1L0V0zEfqJYrtpm36pj/3Xi7n/WDvxLgrOUiVZjOnD89psxKW9IaVQbg6+Exuo+oUoM7Tq/kQdd8qcYJQY6lSGwcXzWkXpIq1mSWnM7dxYgUzz7LJWtCT9BRZ44Tj0t0FM/dcGt523hbUvXhhxiZlN+JWuLrg58UDzpBP8aj90k3Mc9eDGWsfoTWltmOFK2tGG3T1CTPgmJfwpL9zHhVFWOG4BoOr3hwKhEtaAms36bNGyBX3GDtN4K4txJk6vlic2fNBsMeF+tZXiDmAjRIboH5pFMZjjSPjMCR8VyoGkRff2U+/aNjipqIg6VGHuqvzlfXLEqcsMkPCocDV6p2dV/xMNoUbjAVUJW+O2xhSwQXtYrX+6ebmwXFvPewL4HHcW5v2DqA7oG7W66cbc+EQmRg6O5z98Wl0HPGrXLUF7k1sdbsdzAnedl4FVP8rDpfmnJ+oxKM4hC/QT5Qv3Ky+4vndiltxK27FweKCNAzTdrcYOz2xJ5PHq4M4Fs81mW9ujv/wEY4dppzE8aCtahPqW3CVwJHxouFwyZnndXwZb+QMdQLXLOiNxIW9pmjfYXcr7vfikghWsRGXgb9oG5lw8G/aEhOuMueFxr3MeT/Q3oRDpw2s8nVLsuJ+JS5LQDWBy1NQlZvChJMeYgJpZ8It7DPhz40OJhx23BpMy/DmcMuLYSWm5nfY3YpbcStuxa24CdzCfxlb+A9xS2lxnD+dCE7+0n9ERdUMT9GGVVboDyTOWgFlgTDUAAAAAElFTkSuQmCC"
                alt=""
              />
              <div className="line"></div>
              <span>Poster and Banner</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAAB9CAMAAACf8B3/AAAAYFBMVEX///8AAABycnLg4OAGBgbLy8tiYmJcXFyIiIiSkpI9PT1ubm7o6Ojl5eXu7u6VlZWcnJxoaGgcHBx/f3+ioqK8vLyrq6t5eXn5+fnU1NRCQkKzs7MQEBAuLi4hISFNTU3f/X6UAAAC3klEQVRoge2a3bqqIBCGLSVbpWYamn91/3e5K8DQxgYCefYB36EMvAozAwhBoK2E0K7rKMn0q2qqubSbt+JLuh4qOw2buQ7VdRVWUn6gXipOK/DyHoY9NHSWWel9kfXU0ernUenDhrisKKVVHd+kh6E9WDe2ettKjp+R8/gWEbEOu+XzGEv3kSi0hKOivRqK5zAWxVY6MxR9RRcMLiIULLjKlUf0rVk0IRwXm9N4TBffclTDcZUpTDT0fVDE15kmah7VS2MmdOJ+ZAbjL31EDQ/M0GxOiFV7iHvu3gSm0caOZTCTkcvVB78xzyh3jThiKXP7OywtXi2oTV/MLQ+/JxSiE0XMOPo9W7IMGKkZX00HbquV/kyzF3OSUsv672daq1U/1nq3T7F0lCtanxWTnKfZomUhqJTR9ilcPFPC8vIugYtFiiBtH8HiM/JC6Uz9d+u+fcV9tXGlR+CnzmDPmf3kkJZzT3KjYxDjRta047RtQz7VsGXyHioDrPlED7ZUT2jwOofF20Uxulm8wUuFk3UaawnOJX+e5pDG5m7VlcY3L1Gg8TRTLO8TZfEt6g1cdOG0978fFdzbGtp9obRxc/8QDiNv4x5Y7aI0+Q8a7ijyvyJgssdomVQdX8BeZetBn0aQ+lOFsjXQ8RitkasfMFpiSJv0Db57R/od9RJ54sN+KQRB/d0apUlDcUdhslO1QDEe3WPADSr7zXGcC2hzqZC5wna57FMJ33+Br6aSlYOEVhp7zYx2S9ZKNGvyNE/zNE/zNE/zNE/zNE/zNE/zNE/zNE/ztP+H9vt5v5qmp0aHerum6nZCcyNP8zQV2s4h7chvGrlR6fjmQIcbWVM3O11aV6m4redCxZieXeh55pjhZpb0OuBZuPdvXWzGztyMnDi7oripBY1ngHsHMGktUuPWhppcPVz762arrHUT2Me5bbLeVatjAqz5wnUCr1y85Uvy82Av+vrhnE8PUv8BSmMykxEjRaUAAAAASUVORK5CYII="
                alt=""
              />
              <div className="line"></div>
              <span>Bags and Clothings</span>
            </div>
            <div className="item">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div className="line"></div>
              <span>Mugs</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              SBPRINT <i>Services</i>
            </h1>
            <h1>
              A business solution designed for <i>youe choice.</i>
            </h1>
            <p>
             
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Greate and personalized design.
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              budget friendly.
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              high-quality services at your fingertips. 
            </div>
            <button>Order Now</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="trending">
        <div className="con-t">

       
      <h1>Trending Products</h1>
      <Slide slidesToShow={4} arrowsScroll={4}>
        
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
      </div>
      </div>
    </div>
  );
}

export default Home;
