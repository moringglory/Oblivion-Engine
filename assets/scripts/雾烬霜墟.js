//此代码来自无限宇宙
const lib = require("lib");
const {核擎} = require('核擎');
const {渊蛰惊鸿} = require('渊蛰惊鸿');
const 雾烬霜墟 = new JavaAdapter(Planet, {
    load() {
        this.meshLoader = prov(() => new HexMesh(雾烬霜墟, 6));//行星网格数量 2的7次幂加一
        this.super$load();
    }//行星构建
}, "雾烬霜墟", 渊蛰惊鸿, 0.5);//类型:行星

const c1 = Color.valueOf("#BEBEBE"), c2 = Color.valueOf("#BEBEBE"), c3 = Color.valueOf("#BEBEBE");//行星总体颜色
const sS = require("sectorSize");
sS.planetGrid(雾烬霜墟, 2);//行星网格大小

雾烬霜墟.generator = /*星球生成*/extend(SerpuloPlanetGenerator,{//生成塞普罗植物
	allowLanding (sector) {
		return false
	},//所有区块全部应用此生成
    getColor(position) {
        var depth = Simplex.noise3d(4, 4, 0.56, 1.7, position.x, position.y, position.z) / 2;/*三维柏林噪声生成
        变量 深度 =三维柏林噪声(坐标，1.7，xyz位置)/2 
        建议别改*/
        return c1.write(c3).lerp(c2, Mathf.clamp(Mathf.round(depth, 0.25)));//返回值
    },
});

雾烬霜墟.atmosphereColor = Color.valueOf("#BEBEBE");//大气层颜色
雾烬霜墟.landCloudColor = Color.valueOf("#BEBEBE");//云层颜色
雾烬霜墟.atmosphereRadIn = 0;
雾烬霜墟.atmosphereRadOut = 0;//星球大气层厚度
雾烬霜墟.lightSrcTo = 0.8;//区块光照变化
雾烬霜墟.lightDstFrom  = 0;//大气层
雾烬霜墟.localizedName = "雾烬霜墟";//行星名
雾烬霜墟.visible = true;//星球是否可见
雾烬霜墟.bloom = true;//
雾烬霜墟.updateLighting = true;//区块的昼夜交替
雾烬霜墟.accessible = true;//星球是否可以到达
雾烬霜墟.launchCapacityMultiplier = 5;//发射核心时最大可携带的资源量，"1"为发射的核心的100%容量，0.5为50%
雾烬霜墟.allowLaunchSchematics = true;//开启发射核心蓝图
雾烬霜墟.description = "渊蛰惊鸿的卫星";//星球介绍
雾烬霜墟.allowSectorInvasion = true;//模拟攻击图入侵
雾烬霜墟.allowWaveSimulation = true;//模拟后台波次
雾烬霜墟.alwaysUnlocked = true;//默认解锁
雾烬霜墟.clearSectorOnLose = false;//失败后清空你的建筑
雾烬霜墟.allowLaunchLoadout = true;//允许带资源发射核心
雾烬霜墟.startSector = 180;//星球起始公转方向(相对于太阳，1~360随便填)
雾烬霜墟.orbitRadius = 5;//星球轨道半径
雾烬霜墟.tidalLock = false//星球潮汐锁定
雾烬霜墟.iconColor = Color.valueOf("#FFFAFA");//图标颜色
雾烬霜墟.rotateTime = 200;//星球自转一周的时间
雾烬霜墟.defaultCore= 核擎//默认发射核心

exports.雾烬霜墟 = 雾烬霜墟

/*const map1 = new SectorPreset("迫降区", 雾烬霜墟, 0);
map1.alwaysUnlocked = true;
map1.difficulty = 1;
map1.captureWave = 15;
map1.description = "占领这里，发展资源";
map1.localizedName = "迫降区";
Events.on(ContentInitEvent, (e) => {
    lib.addToResearch(map1, {
        parent: '核擎'
        })
    });
exports.map1 = map1

const map2 = new SectorPreset("第谷环形山", 雾烬霜墟, 46);
map2.alwaysUnlocked = false;//默认解锁此区块
map2.difficulty = 3;//难度
map2.captureWave = 20;//敌人波数
map2.description = "采集氦三资源，开始发电";//统计资料顶上的简介
map2.localizedName = "染第谷环形山";//区块名
Events.on(ContentInitEvent, (e) => {
    lib.addToResearch(map2, {
        parent: '迫降区',
        objectives: Seq.with(
            new Objectives.SectorComplete(map1),
            )
    });
});
exports.map2 = map2//地图排序

const map3 = new SectorPreset("静海", 雾烬霜墟, 46);
map3.alwaysUnlocked = false;//默认解锁此区块
map3.difficulty = 3;//难度
map3.captureWave = 20;//敌人波数
map3.description = "平坦的地区有利于生产";//统计资料顶上的简介
map3.localizedName = "静海";//区块名
Events.on(ContentInitEvent, (e) => {
    lib.addToResearch(map3, {
        parent: '第谷环形山',
        objectives: Seq.with(
            new Objectives.SectorComplete(map1),
            )
    });
});
exports.map3 = map3//地图排序*/