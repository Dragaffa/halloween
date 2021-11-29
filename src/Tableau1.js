/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
let timeline;
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload() {

        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-terrain-1','assets/level/background-2/bg2-terrain-1.png')
        this.load.image('bg2-tree-3','/assets/level/background-2/bg2-tree-3.png')



        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1T4', 'assets/level/background-1/bg-terrain-4.png');
        this.load.image('pontFlou', 'assets/level/background-1/bg-wooden-bridge.png');

        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');

        this.load.image('gStone2', 'assets/level/ground/g-stone-2.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gTree3', 'assets/level/ground/g-tree-3.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gWB', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gBox', 'assets/level/ground/g-box-2.png');
        this.load.image('gVine', 'assets/level/ground/g-vine-a.png');

        this.load.image('gStone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gRight2', 'assets/level/ground/g-right.png');
        this.load.image('gRight3', 'assets/level/ground/g-right.png');
        this.load.image('grass2', 'assets/level/ground/g-grass-2.png');
        this.load.image('gTron1', 'assets/level/ground/g-fellen-tree-1.png');
        this.load.image('gSpike', 'assets/level/ground/g-spike-1.png');
        this.load.image('zombie', 'assets/level/zombie/z1.png');

        this.load.image('zombie1', 'assets/level/zombie/z8.png');

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for (let i = 1; i <= 5; i++) {
            this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for (let a = 1; a <= 3; a++) {
            this.load.image('filterFilm' + a, 'assets/level/filters/film/frame-' + a + '.png');
        }
        for (let a = 1; a <= 3; a++) {
            this.load.image('filterBlood' + a, 'assets/level/filters/bloody/frame' + a + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for (let g = 1; g <= 3; g++) {
            this.load.image('bg-animation-' + g, 'assets/level/background-2/bg-animation/bg-animation-' + g + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for (let g = 1; g <= 3; g++) {
            this.load.image('filterRain' + g, 'assets/level/weather/rain/frame' + g + '.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for (let g = 1; g <= 5; g++) {
            this.load.image('filterSnow' + g, 'assets/level/weather/snow/frame' + g + '.png');
        }
        //mort tit bonhomme
        for (let i = 1; i <= 9; i++) {
            this.load.image('mort' + i, 'assets/characters/boy/boy2/PNG/die/die' + i + '.png');
        }
        for (let i = 1; i <= 10; i++) {
            this.load.image('idle'+i, 'assets/characters/boy/boy2/PNG/idle/Layer-' + i + '.png');
        }
        for (let i = 1; i <= 8; i++) {
            this.load.image('enemyrun'+i, 'assets/characters/enemy 1/PNG/run/Layer-' + i + '.png');
        }
        for (let i = 1; i <= 6; i++) {
            this.load.image('enemy2'+i, 'assets/characters/enemy 2/PNG/idle/Layer-' + i + '.png');
        }
    }

    getFrames(prefix,length){
        let frames=[];
        for (let i=1;i<=length;i++){
            frames.push({key: prefix+i});
        }
        return frames;
    }
    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-1').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,150, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);




        let bg2Terrain1=this.add.image(1000,100, 'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain1);

        let bg2Terrain12=this.add.image(1500, 400,'bg2-terrain-1').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain12);

        let bg2tree3=this.add.image(800,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2tree3);

        let bg2tree32=this.add.image(1900,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2tree32);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree2=this.add.image(400,-50, 'bg2-tree-2').setOrigin(0,0);
        this.bg2Container.add(bg2Tree2);
        bg2Tree2.angle=-5; //pencher l'arbre de -5 degrès

        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);

        let bg1Terrain3=this.add.image(-425,200, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);

        let bg1T4=this.add.image(700,200, 'bg1T4').setOrigin(0,0);
        this.bg1Container.add(bg1T4);

        let bg1T42=this.add.image(1700,200, 'bg1T4').setOrigin(0,0);
        this.bg1Container.add(bg1T42);

        let bg1Terrain1=this.add.image(700,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.setScale(0.5)
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Tree1=this.add.image(-25,-40, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.setScale(0.7)

        let bg1Tree3=this.add.image(3000,100, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.setScale(0.6)

        let bg1Tree32=this.add.image(1300,-80, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree32);
        bg1Tree3.setScale(0.2)

        let bg1Tree322=this.add.image(1150,-80, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree322);

        let bg1Tree3222=this.add.image(2000,-80, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3222);

        let bg1Tree3223=this.add.image(1900,-80, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3223);


        let pontFlou=this.add.image(1500,-80, 'pontFlou').setOrigin(0,0);
        this.bg1Container.add(pontFlou);

        //-------------ground (premier plan noir)---------------------------

        /**ptit personnage meurt



        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree2=this.add.image(250,375, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.setScale(0.7)

        let tree21=this.add.image(1120,380, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree21);
        tree21.setScale(0.7)

        let tree3=this.add.image(30,375, 'gTree3').setOrigin(0,1);
        this.groundContainer.add(tree3);
        tree3.setScale(0.7)

        let tree1=this.add.image(900,385, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);

        tree1.angle=-10

        /**
         * zombie
         * @type {Phaser.GameObjects.Image}
         */

        let zombie=this.add.image(1710,170, 'zombie').setOrigin(0,0);
        this.groundContainer.add(zombie);
        zombie.angle=3

        let zombie1=this.add.image(320,190, 'zombie1').setOrigin(0,0);
        this.groundContainer.add(zombie1);

        /**
         * tron
         * @type {Phaser.GameObjects.Image}
         */

        let gTron1=this.add.image(1610,295, 'gTron1').setOrigin(0,0);
        this.groundContainer.add(gTron1);
        gTron1.angle=5
        gTron1.setScale(0.8)

        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
        let gRight3=this.add.image(950,368, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gRight3);

        let gRight2=this.add.image(1100,368, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight2);

        let gRight21=this.add.image(1250,368, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight21);

        let gRight22=this.add.image(1300,368, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight22);

        let gRight23=this.add.image(1450,368, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gRight23);

        let gLeft=this.add.image(1900,380, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gLeft);

        //ici on va calculer les positions
        let gMid1=this.add.image(-150,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Herbe dans l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass7=this.add.image(425,400, 'g-grass-4').setOrigin(0,0);
        gGrass7.setScale(2.5)
        this.groundContainer.add(gGrass7);

        let gGrass8=this.add.image(575,400, 'g-grass-4').setOrigin(0,0);
        gGrass8.setScale(2.5)
        this.groundContainer.add(gGrass8);

        let gGrass9=this.add.image(685,400, 'g-grass-4').setOrigin(0,0);
        gGrass9.setScale(2.5)
        this.groundContainer.add(gGrass9);
        /**
         * De l'eau
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWater=this.add.image(425,385, 'gWater').setOrigin(0,0);
        this.groundContainer.add(gWater);
        /**
         * roche
         * @type {Phaser.GameObjects.Image}
         */

        let gStone51=this.add.image(1060,320, 'gStone5').setOrigin(0,0);
        this.groundContainer.add(gStone51);
        gStone51.setScale(2.0)

        let gStone41=this.add.image(950,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone41);

        let gStone42=this.add.image(1070,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone42);


        let gStone2=this.add.image(350,335, 'gStone2').setOrigin(0,0);
        this.groundContainer.add(gStone2);

        let gStone4=this.add.image(790,350, 'gStone4').setOrigin(0,0);
        this.groundContainer.add(gStone4);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width+1,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain 4
         * @type {Phaser.GameObjects.Image}
         */
        let gMid4=this.add.image(775,365, 'gLeft').setOrigin(0,0);
        this.groundContainer.add(gMid4);

        /**
         * De l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gGrass1=this.add.image(390,310, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass1);

        let gGrass12=this.add.image(1425,330, 'g-grass-1').setOrigin(0,0);
        this.groundContainer.add(gGrass12);

        let gGrass2=this.add.image(340,310, 'g-grass-2').setOrigin(0,0);
        this.groundContainer.add(gGrass2);

        let gGrass5=this.add.image(175,300, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass5);

        let gGrass3=this.add.image(105,300, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass3);

        let gGrass31=this.add.image(1550,330, 'g-grass-3').setOrigin(0,0);
        this.groundContainer.add(gGrass31);


        let gGrass4=this.add.image(5,310, 'g-grass-4').setOrigin(0,0);
        this.groundContainer.add(gGrass4);

        let gGrass6=this.add.image(875,325, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(gGrass6);

        let grass2=this.add.image(1045,310, 'g-grass-5').setOrigin(0,0);
        this.groundContainer.add(grass2);

        let gSpike=this.add.image(1635,420, 'gSpike').setOrigin(0,0);
        this.groundContainer.add(gSpike);
        gSpike.setScale(1.5)
        /**
         * Champignon
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gMushroom1=this.add.image(140,268, 'gMushroom1').setOrigin(0,0);
        gMushroom1.angle=10;
        this.groundContainer.add(gMushroom1);

        let gMushroom12=this.add.image(1460,327, 'gMushroom1').setOrigin(0,0);
        this.groundContainer.add(gMushroom12);
        gMushroom12.setScale(0.6)
        /**
         * pont
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gWB=this.add.image(425,300, 'gWB').setOrigin(0,0);
        gWB.setScale(0.8)
        this.groundContainer.add(gWB);
        /**
         * Caisse
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gBox=this.add.image(525,293, 'gBox').setOrigin(0,0);
        gBox.setScale(0.6)
        gBox.angle=5
        this.groundContainer.add(gBox);
        /**
         * liane
         * @type {Phaser.GameObjects.TileSprite}
         */
        let gVine=this.add.tileSprite(570,-3, 20, 400,'gVine').setOrigin(0,0);
        gVine.setScale(0.5)
        this.groundContainer.add(gVine);
        let gVine2=this.add.tileSprite(600,-3, 20, 250,'gVine').setOrigin(0,0);
        gVine2.setScale(0.5)
        this.groundContainer.add(gVine2);



        //ANIMATION
        this.idle = this.add.sprite(500, 110, 'idle').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'idle',
            frames: this.getFrames("idle",10),
            frameRate: 12,
            repeat: -1
        });
        this.idle.play('idle');

        this.mort = this.add.sprite(500, 110, 'mort').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'mort',
            frames: this.getFrames("mort",9),
            frameRate: 12,
            repeat: -1,


        });
        this.mort.play('mort');
        this.mort.visible=false;




        this.enemyrun = this.add.sprite(800, 160, 'enemyrun').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemyrun',
            frames: this.getFrames("enemyrun",8),
            frameRate: 12,
            repeat: -1
        });
        this.enemyrun.flipX = true;
        this.enemyrun.play('enemyrun');
        this.enemyrun.setScale(0.5);
        this.tweens.add({
            targets: this.enemyrun,
            x: 1000,
            duration: 1000,
            ease: 'Circular.InOut',
            yoyo: true,
            flipX : true,
            delay: 1000,
            repeat: -1,
        });


        this.enemy2 = this.add.sprite(180, 50, 'enemy2').setOrigin(0,0);
        console.log(frames)
        this.anims.create({
            key: 'enemy2',
            frames: this.getFrames("enemy2",6),
            frameRate: 12,
            repeat: -1



        });
        this.enemy2.play('enemy2');
        this.enemy2.setScale(0.2);


        timeline = this.tweens.timeline({

            targets: this.enemy2,
            loop: 50,

            tweens: [
                {
                    x: 60,
                    ease: 'Sine.easeInOut',
                    duration: 2000,
                    yoyo: true
                },
                {
                    y: 10,
                    ease: 'Sine.easeOut',
                    duration: 1000,
                    offset: 0
                },
                {
                    y: 30,
                    ease: 'Sine.easeIn',
                    duration: 1000
                },
                {
                    y: 50,
                    ease: 'Sine.easeOut',
                    duration: 1000
                },
                {
                    y: 30,
                    ease: 'Sine.easeIn',
                    duration: 1000
                }
            ]

        });

        console.log(timeline);




        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},

            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');

        /** mort petit bonhomme
        */
         this.mort = this.add.sprite(0, 0, 'mort').setOrigin(0,0);
         this.anims.create({
            key: 'mort',
            frames: [
                {key:'mort1'},
                {key:'mort2'},
                {key:'mort3'},
                {key:'mort4'},
                {key:'mort5'},
                {key:'mort6'},
                {key:'mort7'},
                {key:'mort8'},
                {key:'mort9'},

            ],
            frameRate: 9,
            repeat: -1
        });
         this.mort.play('mort');
         this.mort.visible=false;




        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterSnow = this.add.sprite(0, 0, 'filterSnow1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'snow',
            frames: [
                {key:'filterSnow1'},
                {key:'filterSnow2'},
                {key:'filterSnow3'},
                {key:'filterSnow4'},
                {key:'filterSnow5'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterSnow.play('snow');
        this.filterSnow.visible=false;

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterBlood = this.add.sprite(0, 0, 'filterBlood1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'Blood',
            frames: [
                {key:'filterBlood1'},
                {key:'filterBlood2'},
                {key:'filterBlood3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterBlood.play('Blood');

        /**
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterRain = this.add.sprite(0, 0, 'filterRain1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'filterRain1'},
                {key:'filterRain2'},
                {key:'filterRain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterRain.play('rain');

        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1073, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.filterBlood.scrollFactorX=0;
        this.filterRain.scrollFactorX=0;
        this.filterSnow.scrollFactorX=0;
        this.bg2Container.scrollFactorX=10;
        this.bg1Container.scrollFactorX=10;
        this.groundContainer.scrollFactorX=10;
        this.idle.scrollFactorX=10;
        this.enemyrun.scrollFactorX=10;
        this.enemy2.scrollFactorX=10;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard()
        {
            let me = this;
            this.input.keyboard.on('keydown', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                        me.speed = 1;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.speed = -1;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.S:
                        me.filterSnow.visible = false;
                        me.filterRain.visible = false;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.P:
                        me.filterSnow.visible = false;
                        me.filterRain.visible = true;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.N:
                        me.filterSnow.visible = true;
                        me.filterRain.visible = false;
                        break;
                    case Phaser.Input.Keyboard.KeyCodes.d:
                        me.mort.visible = true;
                        break;
                }
            });
            this.input.keyboard.on('keyup', function (kevent) {
                switch (kevent.keyCode) {
                    case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    case Phaser.Input.Keyboard.KeyCodes.LEFT:
                        me.speed = 0;
                        break;
                }
            });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
    }


}
