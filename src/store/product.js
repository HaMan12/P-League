import { defineStore } from 'pinia'
import axios from 'axios';


// axios api
export const useProductStore = defineStore('product', {
    state: () => ({
      shopData:     [
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_131_1684139901.png',
            name:'XAP x P.-LEAGUE+-吊卡收藏玩具',
            NTD:'4800',
            content:'「XAP x P. LEAGUE+ 吊卡收藏玩具組」整套內含 PLG 六支隊伍的 @hello.xap 聯名公仔，以特製鞋盒為外包裝，吊卡以 2022-23 賽季 #OhMyPLG 視覺設計！（單套 $4,800，整套不拆售）',
            isLiked: false,
            isTshirt: false
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_205_1711334974.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'980',
            content:'PLG黑潮系列以黑印Logo為基底，此款全新的聯盟專屬單面背心使用寬肩設計修飾上身，舒適硬挺的純棉材質不論是日常訓練或是出門穿搭都能輕鬆駕馭。',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1_178_1684911171.jpg',
            name:'PLG經典款折疊功能包',
            NTD:'980',
            content:'PLG經典款式系列特別設計的功能包品項之一有別以往設計可擴大儲物空間，中間附有掛勾提高了配件的功能性，讓不同場合時的穿搭都可以做更豐富的表現！ <br><br>《材質》＊100%polyester <br>《尺寸》＊下摺 - 長28公分 寬20公分＊展開 - 長39公分 寬20公分<br><br>',
            isLiked: false,
            isTshirt: false
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1638755951.jpg',
            name:'PLG2.0大P數碼Tee',
            NTD:'780',
            content:'P. LEAGUE+2.0 『有點意思』持續升級中！<br>這一次我們把電玩感的元素及過往8-bit的pixel作法帶入到此次的商品視覺，並把籃球場上會看到的元素做出不同的呈現方式。除此之外在六隊的特色上也做了遊戲化的表現，像是寶劍、王冠、爪痕、戰機、星芒、鋼筋，並在部分商品的圖像上做了夜光處理，跟P. League字樣做一個有趣的結合，讓人發現到第二季商品的細節表現後，就能自然感受到這次真的『有點意思』！<br><br>此款用大量的P跟+去建構了此次大P的圖像，讓數碼的編成更有遊戲感！"<br><br><br>《材質》<br>＊ 100% 純棉<br>＊細目網版印刷',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1671592957.jpg',
            name:'Oh my PLG主題短Tee(黑)',
            NTD:'880',
            content:'以年度Slogan #Oh my PLG 為主要設計，採用桃紅與淺藍做配色，活潑且豐富的表現，一起大喊 #Oh my PLG！<br><br>《材質》<br>＊ 100% 純棉<br>＊網版印刷 ',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1610978482.jpg',
            name:'PLUS 專業運動襪 PRO SOCKS',
            NTD:'280',
            content:'・厚度UP 採用四毛圈技術加厚襪底，緩衝吸震，減少腳踝與膝蓋負擔<br>・透氣UP 四毛圈技術透過特殊織法，透氣性十足，不悶不熱<br>・包覆UP 壓縮針織腳背包覆感更強，增加足弓穩定性<br>・除菌UP 添加特殊染劑除菌抑臭，運動完清爽無負擔<br><br>Ｌ：26-28 CM、9-10 US<br>XL：28.5-30 CM、10.5-12.5 US<br>2XL：30.5-32 CM、13-14 US<br><br>《材質》<br>＊棉 74%<br>＊彈性纖維 1%<br>＊尼龍 23%<br>＊萊卡 2% ',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1671593239.jpg',
            name:'Oh my PLG主題短Tee(粉)',
            NTD:'980',
            content:'以年度Slogan #Oh my PLG 為主要設計，採用桃紅與淺藍做配色，活潑且豐富的表現，一起大喊 #Oh my PLG！<br><br>《材質》<br>＊ 100% 純棉<br>＊網版印刷',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1649943103.jpg',
            name:'P+BLACK LABEL 漁夫帽(軍綠)',
            NTD:'980',
            content:'PLG BLACK LABEL 黑標系列<br>此系列有別於其他款式的設計風格，更著重於在材質及做工上的細節，P. BKPLDS+ 的名稱來自於聯盟及六隊隊名的英文部首，六隊的風格及特色都不盡相同，把全部合在一起的用意也是希望黑標系列能呈現出它自己更獨特的風格面貌！<br>＊黑標系列皆為限量及完售後不再追加的銷售性商品<br><br>《材質》 <br>＊100%POLYESTER+鋅合金',
            isLiked: false,
            isTshirt: false
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1711334694.jpg',
            name:'黑潮環繞文字女款短版Tee｜水洗黑',
            NTD:'880',
            content:'PLG黑潮系列以黑印Logo為基底，此款品項運用水洗刷舊工藝帶來獨特的洗鍊造型，搭配環繞在胸前的聯盟品牌文字呈現。<br><br>溫馨提醒：此商品為故意做舊之水洗風格商品，洗滌時掉色為正常現象，建議手洗或與其他淺色衣物分開清洗，避免造成染色。<br>《材質》<br>*100%純棉<br>*特殊水洗工藝<br> *前後網版印刷<br>',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1638759703.jpg',
            name:'PLG2.0 8-bit大圖托特包',
            NTD:'580',
            content:'P. LEAGUE+2.0 『有點意思』持續升級中！<br>這一次我們把電玩感的元素及過往8-bit的pixel作法帶入到此次的商品視覺，並把籃球場上會看到的元素做出不同的呈現方式。除此之外在六隊的特色上也做了遊戲化的表現，像是寶劍、王冠、爪痕、戰機、星芒、鋼筋，並在部分商品的圖像上做了夜光處理，跟P. League字樣做一個有趣的結合，讓人發現到第二季商品的細節表現後，就能自然感受到這次真的『有點意思』！<br><br>《材質》<br>＊100% 帆布',
            isLiked: false,
            isTshirt: false
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1638757156.jpg',
            name:'黑潮寬肩棉質背心｜黑 ',
            NTD:'880',
            content:'',
            isLiked: false,
            isTshirt: true
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1672988614.jpg',
            name:'大P城市Tee (白)',
            NTD:'580',
            content:'這次聯盟特地設計了一款集結各隊的城市TEE，城市支持球隊、球隊同時也在強化城市的價值，我們把台北101、新北斜張橋、新竹風車、桃園飛機、彰化大佛、高雄85大樓集結到了聯盟LOGO裡的同時，也代表著聯盟與球隊的完整結合，一起努力深耕在這塊屬於大家的土地上面！<br><br><br>《材質》<br>＊ 100% 純棉<br>＊高品質膠印、金漿 ',
            isLiked: false,
            isTshirt: false
        },
        {
            id:crypto.randomUUID(),
            imgUrl:'https://d36fypkbmmogz6.cloudfront.net/upload/products/photo1__1671591992.jpg',
            name:'Oh my PLG主題毛巾',
            NTD:'380',
            content:'以年度Slogan #Oh my PLG 為主要設計，毛巾為兩面不同材質，一面用昇華工藝顯現質感，一面用長毛絨加強吸濕效果，美觀又實用。不論現場加油吶喊還是球場揮汗，都是不可或缺的好配件！<br><br>《材質》<br>＊85% 聚酯纖維<br>＊15% 尼龍<br><br>《尺寸》<br>＊高29公分 寬100公分',
            isLiked: false,
            isTshirt: false
        },
    ],
      loading: false,
    }),
    actions: {
    //   async fetchRecord() {
    //     try {
    //       this.loading = true;
    //       const response = await axios.get('https://api-nine-brown.vercel.app/api/record');
    //       this.record = response.data;
    //       this.loading = false;
    //       console.log('成功');
    //     } catch (error) {
    //       console.log('錯誤訊息', error);
    //     }
    //   },
    },
  });