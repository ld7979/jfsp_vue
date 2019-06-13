<template>
  <div>
    <myheader></myheader>
    <banner></banner>
    <div id="i_content" class="clearfix">
      <!-- 精选菜谱 -->
      <p class="i_title">每日精选菜谱 <router-link to="/">更多&gt;</router-link></p>
      <ul class="recipes clearfix">
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/01.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">翡翠酿肉卷</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">wiwiwi</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/02.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">#甜粽VS咸粽，你是哪一党？#海兔绿豆芽小炒</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">踏月色而来7737</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/03.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">红烧肉（加蛋）</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">QQ茜</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item" style="margin-right: 0">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/04.jpg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">#甜粽VS咸粽，你是哪一党？#西米水晶粽</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">琥珀maggie</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/05.JPG"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">鸡米花</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">雅雅杨小厨</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/06.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">#甜粽VS咸粽，你是哪一党？#海蛎子西葫芦饺子</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">踏月色而来7737</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/07.jpg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">蒜香孜然鸡翅</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">果果郭美食记</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item" style="margin-right: 0">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/08.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">酸酸甜甜滴茄汁大虾</router-link>
            <p class="author text-lips">by 
              <router-link class="author_name text-lips" to="/" target="_blank">霖的吃货铺</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
      </ul>
      <!-- 笔记 -->
      <p class="i_title" style="margin-top:40px;">笔记<router-link to="/">更多&gt;</router-link></p>
      <ul class="recipes clearfix">
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/09.jpg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">每一个人的心中 都有一种历久弥香的味道 是食物 也是想念 可以满足味蕾 也能慰籍灵魂 生活中的美好不只是来自食物 但少了美味的食物 生活会有点寡淡索然 闺女现在念高三了 已经进入紧张的复习阶段  学习很累 只有早饭在家里吃 每天清晨4.50起床 精心给闺女准备早餐 每一餐都不重样  搭配美美的碗碟 闺女吃的舒心 这一天心情都是美美的而 时光啊 也这么一天天 一点点走远了 我只希望 宝贝闺女在长大成</router-link>
            <p class="author text-lips">
              <img class="headicon" src="images/index/10.jpeg"> 
              <router-link class="author_name text-lips" to="/" target="_blank">策马苍穹</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/11.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">我最爱的餐具🌵都是我爱的 保证让你们满意✌️</router-link>
            <p class="author text-lips">
              <img class="headicon" src="images/index/12.jpeg"> 
              <router-link class="author_name text-lips" to="/" target="_blank">踏月色而来7737</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/13.jpg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">这是啥花？🌸~娃赊回来的花😂</router-link>
            <p class="author text-lips">
              <img class="headicon" src="images/index/14.jpg"> 
              <router-link class="author_name text-lips" to="/" target="_blank">QQ茜</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
        <li class="i_item" style="margin-right: 0">
          <router-link class="cover br8" to="/" target="_blank"><img src="images/index/15.jpeg"></router-link>
          <div>
            <router-link class="name text-lips" to="/" target="_blank">太太乐爱得味道让她尝到</router-link>
            <p class="author text-lips">
              <img class="headicon" src="images/index/16.jpeg"> 
              <router-link class="author_name text-lips" to="/" target="_blank">四毛家的小窝</router-link>
              <router-link class="progr" style="background-position: 0 -22px;" to="/" target="_blank"></router-link>
            </p>
          </div>
        </li>
      </ul>
      <div id="i_left">
          <p class="i_title" style="margin-top:40px;">热门食材<router-link to="/">更多&gt;</router-link></p>
          <ul class="material-list br8">
            <li class="m_item">
              <router-link to="/">
                <img src="images/index/17.jpg">
                羊肉
              </router-link>
            </li>
            <li class="m_item">
              <router-link to="/">
                <img src="images/index/18.jpg">
                猪肉
              </router-link>
            </li>
            <li class="m_item">
              <router-link to="/">
                <img src="images/index/19.jpg">
                土豆
              </router-link>
            </li>
            <li class="m_item">
              <router-link to="/">
                <img src="images/index/20.jpg">
                白萝卜
              </router-link>
            </li>
            <li class="m_item">
              <router-link to="/">
                <img src="images/index/21.jpg">
                带鱼
              </router-link>
            </li>
            <li class="m_item">
              <router-link to="/">
                <img src="images/index/22.jpg">
                酸菜
              </router-link>
            </li>
            <li class="m_item mt">
              <router-link to="/">
                <img src="images/index/23.jpg">
                虾
              </router-link>
            </li>
            <li class="m_item mt">
              <router-link to="/">
                <img src="images/index/24.jpg">
                柚子
              </router-link>
            </li>
            <li class="m_item mt">
              <router-link to="/">
                <img src="images/index/25.jpg">
                苹果
              </router-link>
            </li>
            <li class="m_item mt">
              <router-link to="/">
                <img src="images/index/26.jpg">
                鸡肉
              </router-link>
            </li>
            <li class="m_item mt">
              <router-link to="/">
                <img src="images/index/27.jpg">
                芋头
              </router-link>
            </li>
            <li class="m_item mt">
              <router-link to="/">
                <img src="images/index/28.jpg">
                蛤蜊
              </router-link>
            </li>
            
          </ul>
          <p class="i_title" style="margin-top:40px;">精彩主题文章<router-link to="/">更多&gt;</router-link></p>
          <div class="article">
            <div class="hot_article">
              <router-link class="a_cover" to="/" >
                <img src="images/index/622.jpg">
              </router-link>
              <span class="info">
                <router-link to="/" class="a_name">[食力派]寻味之旅 | 我们在北京和大家共度了一个吃吃喝喝的欢乐下午</router-link> <br>
                <span class="source">来自：走哪吃哪主题站</span> 
                <span>作者：<a>少油少盐</a></span> 
              </span>
            </div>
            <ul class="alist">
              <li>
                <b>·</b>
                <router-link to="/" target="_blank">香糯五谷 “煲”出健康好滋味 飞利浦全新五谷电饭煲重磅亮相媒体品鉴沙龙</router-link>
              </li>
              <li>
                <b>·</b>
                <router-link to="/" target="_blank">美味橄榄油，健康添活力</router-link>
              </li>
              <li>
                <b>·</b>
                <router-link to="/" target="_blank">三八女神节多彩智利葡萄让生活更精彩</router-link>
              </li>
              <li>
                <b>·</b>
                <router-link to="/" target="_blank">九阳发布“悦享健康”新主张 3大颠覆性新品亮相</router-link>
              </li>
              <li>
                <b>·</b>
                <router-link to="/" target="_blank">“智利核果月”今春在沪拉开帷幕 油桃布林西梅精彩纷呈</router-link>
              </li>
              <li>
                <b>·</b>
                <router-link to="/" target="_blank">智利蓝莓亮相上海影院 鲜甜健康小食备受欢迎</router-link>
              </li>
            </ul>
          </div>
          <p class="i_title" style="margin-top:40px;">大家的作品<router-link to="/">更多&gt;</router-link></p>
          <ul class="zp_list">
            <li>
              <div class="zp_left">
                <a href="javascript:;">
                  <img class="br8" src="images/index/31.jpg">
                </a>
                <a class="zpinfo" href="javascript:;">
                  <span>涛涛妈咪的作品</span> <br>
                  <span>对照菜谱做出来的作品<b>9436</b>个</span>
                </a>
              </div>
              <div class="zp_right">
                <img src="images/index/34.jpg">
                <img src="images/index/35.jpeg">
                <img src="images/index/36.jpg">
              </div>
            </li>
            <li>
              <div class="zp_left">
                <a href="javascript:;">
                  <img class="br8" src="images/index/32.jpg">
                </a>
                <a class="zpinfo" href="javascript:;">
                  <span>万万的作品</span> <br>
                  <span>对照菜谱做出来的作品<b>1174</b>个</span>
                </a>
              </div>
              <div class="zp_right">
                <img src="images/index/38.jpg">
                <img src="images/index/39.jpg">
                <img src="images/index/40.jpg">
              </div>
            </li>
            <li>
              <div class="zp_left">
                <a href="javascript:;">
                  <img class="br8" src="images/index/33.jpg">
                </a>
                <a class="zpinfo" href="javascript:;">
                  <span>dUcky的作品</span> <br>
                  <span>对照菜谱做出来的作品<b>1472</b>个</span>
                </a>
              </div>
              <div class="zp_right">
                <img src="images/index/41.jpeg">
                <img src="images/index/42.jpeg">
                <img src="images/index/43.jpg">
              </div>
            </li>
            <li>
              <div class="zp_left">
                <a href="javascript:;">
                  <img class="br8" src="images/index/37.jpg">
                </a>
                <a class="zpinfo" href="javascript:;">
                  <span>爱烘焙的加菲的作品</span> <br>
                  <span>对照菜谱做出来的作品<b>535</b>个</span>
                </a>
              </div>
              <div class="zp_right">
                <img src="images/index/44.jpg">
                <img src="images/index/45.jpeg">
                <img src="images/index/46.jpg">
              </div>
            </li>
            
          </ul>
      </div>
      <div id="i_right">
        <!-- 广告 -->
        <div class="ad">
          <img class="br8" src="images/index/50.jpg">
          <a href="#">煎饼果子加盟店</a>
        </div>
        <!-- 达人 -->
        <p class="i_title" style="margin-top:40px;">豆果达人<router-link to="/">更多&gt;</router-link></p>
        <ul class="dr_list">
          <li>
            <div>
              <a href="#">
                <img class="dr_headicon br8" src="images/index/51.jpeg" alt="">
              </a>
              <div class="dr_info">
                <a href="#">颖涵的快厨房 </a>
                <a class="progr" style="background-position: 0 -22px;" href="#"></a>
                <p>60952粉丝</p>
              </div>
            </div>
            <a class="gz" href="#"><span>+</span> 关注</a>
          </li>
          <li>
            <div>
              <a href="#">
                <img class="dr_headicon br8" src="images/index/51.jpeg" alt="">
              </a>
              <div class="dr_info">
                <a href="#">颖涵的快厨房 </a>
                <a class="progr" style="background-position: 0 -22px;" href="#"></a>
                <p>60952粉丝</p>
              </div>
            </div>
            <a class="gz" href="#"><span>+</span> 关注</a>
          </li>
          <li>
            <div>
              <a href="#">
                <img class="dr_headicon br8" src="images/index/51.jpeg" alt="">
              </a>
              <div class="dr_info">
                <a href="#">颖涵的快厨房 </a>
                <a class="progr" style="background-position: 0 -22px;" href="#"></a>
                <p>60952粉丝</p>
              </div>
            </div>
            <a class="gz" href="#"><span>+</span> 关注</a>
          </li>
          <li>
            <div>
              <a href="#">
                <img class="dr_headicon br8" src="images/index/51.jpeg" alt="">
              </a>
              <div class="dr_info">
                <a href="#">颖涵的快厨房 </a>
                <a class="progr" style="background-position: 0 -22px;" href="#"></a>
                <p>60952粉丝</p>
              </div>
            </div>
            <a class="gz" href="#"><span>+</span> 关注</a>
          </li>
          <li>
            <div>
              <a href="#">
                <img class="dr_headicon br8" src="images/index/51.jpeg" alt="">
              </a>
              <div class="dr_info">
                <a href="#">颖涵的快厨房 </a>
                <a class="progr" style="background-position: 0 -22px;" href="#"></a>
                <p>60952粉丝</p>
              </div>
            </div>
            <a class="gz" href="#"><span>+</span> 关注</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import myheader from '../components/myHeader'
import banner from '../components/banner'
export default {
  name: "Index",
  data() {
    return {};
  },
  components:{myheader,banner}
};
</script>

<style scoped>
  @import '../assets/css/index.css';
</style>