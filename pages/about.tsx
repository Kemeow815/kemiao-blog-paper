import Head from "next/head";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { CommonHead } from ".";
import { PageDescription } from '../components/common/page-description';
import LayoutContainer, { OneColLayout } from "../components/layout";
import { MarkdownStyle } from "../components/markdown/markdown-style";
import { siteInfo } from "../site.config";
import { bottomFadeIn, textFocusIn } from "../styles/animations";
import { textStroke } from "../styles/css";

export default function About() {
  const [isBgLoaded, setIsBgLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = '/imgs/bg.jpg';
    img.onload = () => setIsBgLoaded(true);
    img.onerror = () => {
      console.error('Failed to load image');
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    }
  }, [])

  return (
    <div>
      <Head>
        <title>{`About ${siteInfo.author}`}</title>
        <CommonHead />
        </Head>
      <LayoutContainer hidesearch={true}>
        <Hero className={isBgLoaded ? 'loaded' : ''}>
          <span>{`Hi, I'm ${siteInfo.author}`}</span>
        </Hero>
        <OneColLayout>
          <AboutDescription>/ 关于 克喵爱吃卤面 /</AboutDescription>
          <AnimatedMarkdown>
            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <a href="https://blog-v3.kemeow.top/">
                <img 
                  src="https://media.giphy.com/media/SWoSkN6DxTszqIKEqv/giphy.gif" 
                  alt="GIF Link" 
                  height="275" 
                  style={{ maxWidth: '100%', height: 'auto', display: 'inline-block' }}
                />
              </a>
            </div>
            
            <ul>
              <li>🔭 I’m currently studying in Nanjing</li>
              <li>🌱 Current learning content: Automation Technology and Applications, front-end (sub), etc</li>
              <li>💬 You can ask me some questions about resources。</li>
              <li>📫 How to contact my email or official account: kemiaofx@163.com</li>
              <li>🍉 Active Community：
                <a href="https://blog-v3.kemeow.top">BLOG</a> | 
                <a href="https://t.me/KemiaoJun">Telegram</a> | 
                <a href="https://x.com/kemiaosw/">X</a>
              </li>
            </ul>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <img 
                src="https://capsule-render.vercel.app/api?type=waving&color=timeGradient&height=300&&section=header&text=HI%20THERE!&fontSize=90&fontAlign=50&fontAlignY=30&desc=I%20AM%20KeMiao%20%F0%9F%91%8B&descAlign=50&descSize=30&descAlignY=60&animation=twinkling" 
                alt="Capsule Header"
                style={{ maxWidth: '100%' }}
              />
            </div>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <img 
                src="https://readme-typing-svg.demolab.com?font=Orbitron&size=25&pause=1000&center=true&vCenter=true&random=false&width=600&lines=Welcome+to+my+About+page!;I+am+KeMiao+obsessed+with+programming!" 
                alt="Typing SVG"
                style={{ maxWidth: '100%' }}
              />
            </div>

            <h3>👋 个人简介</h3>
            <hr />
            <p>
              <a href="https://kemiao.online">个人主页</a> | 
              <a href="https://blog-v3.kemeow.top">博客站点</a>
            </p>
            <p>大家好！这里是克喵爱吃卤面的博客。致力于分享资源、生活日记和踩坑教程，代码水准一般，自动化专业大学生，现于南京就读，普通的大学牛马。</p>

            <h3>关于我</h3>
            <hr />
            <ul>
              <li><strong>个性:</strong> 开朗活泼，热爱学习，勤奋工作</li>
              <li><strong>技能:</strong> 自动化技术与应用</li>
              <li><strong>个人信息:</strong>
                <ul>
                  <li><strong>姓名:</strong> mcy</li>
                  <li><strong>学校:</strong> 南京工业职业技术大学，<a href="https://www.niit.edu.cn/">官方网站</a></li>
                  <li><strong>年级:</strong> 大三</li>
                  <li><strong>职业:</strong> 学生</li>
                </ul>
              </li>
              <li><strong>兴趣:</strong> 计算机，单机游戏，电子产品，数码产品，资源分享</li>
              <li><strong>梦想:</strong> 咸鱼算不算？</li>
            </ul>

            <h3>📈 我的GitHub数据</h3>
            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://github-readme-stats.vercel.app/api?username=Kemeow815" 
                alt="GitHub Stats" 
                style={{ maxWidth: '100%' }}
              />
            </div>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
              <img 
                src="https://github-readme-activity-graph.vercel.app/graph?username=Kemeow815&theme=github-compact&custom_title=Activity&radius=30&height=300" 
                alt="Activity Graph"
                style={{ maxWidth: '100%' }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <img 
                src="https://github-immortality.vercel.app/api?username=Kemeow815" 
                alt="修仙系列统计卡片" 
                style={{ maxWidth: '100%' }} 
              />
            </div>

            <h3>赞助</h3>
            <ul>
              <li>微信公众号：<a href="https://wechat.kemeow.top/">克喵的小站</a></li>
              <li>赞助页面: <a href="https://donate.kemeow.top/">点我</a></li>
            </ul>
          </AnimatedMarkdown>
        </OneColLayout>
      </LayoutContainer>
    </div>
  )
}

const Hero = styled.h1`
  span {
    ${() => textStroke}
  }

  position: relative;
  text-align: center;
  margin: 0px 0px 0.5em;
  padding: 15% 0px;
  color: white;
  background: black;
  transition: background 0.8s ease;

  &.loaded {
    background: #00000015;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/imgs/bg.jpg);
    background-size: cover;
    background-position: center 40%;
    opacity: 0;
    z-index: -1;
  }

  &.loaded::before {
    animation: none;
    opacity: 0;
    transition: opacity 0.5s;
  }

  &.loaded::after {
    opacity: 1;
    animation: ${textFocusIn} 0.8s ease-out;
  }
`

const AnimatedMarkdown = styled(MarkdownStyle)`
  animation: ${bottomFadeIn} .3s ease;
`

const AboutDescription = styled(PageDescription)`
`