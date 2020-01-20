/*
const scene = new BABYLON.Scene();
    scene.clearColor = new BABYLON.Color3(0, 0, 0.2);
    scene.gravity = new BABYLON.Vector3(0, -0.9, 0);
    scene.collisionsEnabled = true;



    // Lights
    let torch = new BABYLON.PointLight('light1', BABYLON.Vector3.Zero(), scene);
    torch.intensity = 0.7;
    torch.diffuse = BABYLON.Color3.FromHexString('#ff9944');

    let sky = new BABYLON.HemisphericLight('sky', new BABYLON.Vector3(0, 1.0, 0), scene);
    sky.intensity = 0.5;

    // Shadow
    let shadowGenerator = new BABYLON.ShadowGenerator(1024, torch);
    shadowGenerator.setDarkness(0.2);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.blurBoxOffset = 1.0;
    shadowGenerator.blurScale = 20.0;

    // Material
    let player1Mat = new BABYLON.StandardMaterial('pmat', scene);
    player1Mat.emissiveColor = BABYLON.Color3.FromHexString('#ff9900');
    player1Mat.specularPower = 64;

    let playereMat = new BABYLON.StandardMaterial('pemat', scene);
    playereMat.emissiveColor = BABYLON.Color3.FromHexString('#ffffff');
    playereMat.specularPower = 128;

    let playerbMat = new BABYLON.StandardMaterial('pbmat', scene);
    playerbMat.diffuseColor = BABYLON.Color3.Black();

    // Player ----
    player = BABYLON.Mesh.CreateSphere('playerbody', 8, 1.8, scene);
    player.material = player1Mat;
    player.position.y = 0.9;

    let playere1 = BABYLON.Mesh.CreateSphere('eye1', 8, 0.5, scene);
    playere1.material = playereMat;
    playere1.position.y = 0.5;
    playere1.position.z = 0.5;
    playere1.position.x = -0.3;
    playere1.parent = player;

    let playere2 = BABYLON.Mesh.CreateSphere('eye2', 8, 0.5, scene);
    playere2.material = playereMat;
    playere2.position.y = 0.5;
    playere2.position.z = 0.5;
    playere2.position.x = 0.3;
    playere2.parent = player;

    let playereb1 = BABYLON.Mesh.CreateSphere('eye1b', 8, 0.25, scene);
    playereb1.material = playerbMat;
    playereb1.position.y = 0.5;
    playereb1.position.z = 0.7;
    playereb1.position.x = -0.3;
    playereb1.parent = player;

    let playereb2 = BABYLON.Mesh.CreateSphere('eye2b', 8, 0.25, scene);
    playereb2.material = playerbMat;
    playereb2.position.y = 0.5;
    playereb2.position.z = 0.7;
    playereb2.position.x = 0.3;
    playereb2.parent = player;

    shadowGenerator.getShadowMap().renderList.push(player);
    player.checkCollisions = true;
    player.applyGravity = true;
    player.ellipsoid = new BABYLON.Vector3(0.9, 0.45, 0.9);
    player.speed = new BABYLON.Vector3(0, 0, 0.08);
    player.nextspeed = new BABYLON.Vector3.Zero();
    player.nexttorch = new BABYLON.Vector3.Zero();

    // Camera
    let camera = new BABYLON.FollowCamera('FollowCam', new BABYLON.Vector3(player.position.x, player.position.y + 5, player.position.z - 45), scene);

    camera.radius = 25; // how far from the object to follow
    camera.heightOffset = 3; // how high above the object to place the camera
    camera.rotationOffset = 90; // the viewing angle
    camera.cameraAcceleration = 0; // how fast to move
    camera.maxCameraSpeed = 20; // speed limit
    camera.attachControl(canvas, true);
    // camera.target = player;
    camera.lockedTarget = player; // target any mesh or object with a "position" Vector3

    scene.activeCamera = camera;

    let lightImpostor = BABYLON.Mesh.CreateSphere('sphere1', 16, 0.1, scene);
    let lightImpostorMat = new BABYLON.StandardMaterial('mat', scene);
    lightImpostor.material = lightImpostorMat;
    lightImpostorMat.emissiveColor = BABYLON.Color3.Yellow();
    lightImpostorMat.linkEmissiveWithDiffuse = true;
    lightImpostor.position.y = 4.0;
    lightImpostor.position.z = 0.7;
    lightImpostor.position.x = 1.2;
    lightImpostor.parent = player;

    // Ground
    let ground = BABYLON.Mesh.CreatePlane('g', 120, scene);
    ground.position = new BABYLON.Vector3(0, 0, 0);
    ground.rotation.x = Math.PI / 2;
    ground.receiveShadows = true;
    ground.checkCollisions = true;

    let wall1 = BABYLON.Mesh.CreateBox('w1', 3, scene);
    wall1.checkCollisions = true;
    wall1.position = new BABYLON.Vector3(8, 4.5, 5);
    shadowGenerator.getShadowMap().renderList.push(wall1);

    let wall2 = BABYLON.Mesh.CreateBox('w2', 3, scene);
    wall2.checkCollisions = true;
    wall2.position = new BABYLON.Vector3(11, 1.5, 5);
    shadowGenerator.getShadowMap().renderList.push(wall2);

    let wall3 = BABYLON.Mesh.CreateBox('w3', 3, scene);
    wall3.checkCollisions = true;
    wall3.position = new BABYLON.Vector3(5, 1.5, 5);
    shadowGenerator.getShadowMap().renderList.push(wall3);

    // Keypress events
    window.keyisdown = {};
    window.addEventListener('keydown', function(event) {
        window.keyisdown[event.keyCode] = true;
    });

    window.addEventListener('keyup', function(event) {
        window.keyisdown[event.keyCode] = false;
    });

    window.tempv = new BABYLON.Vector3.Zero();

    scene.registerBeforeRender(function() {
        // Player speed
        let v = 0.5;
        player.nextspeed.x = 0.0;
        player.nextspeed.z = 0.00001;
        if (window.keyisdown[37]) {
            player.nextspeed.x = -v;
            player.nextspeed.z = -v;
        }
        if (window.keyisdown[39]) {
            player.nextspeed.x = v;
            player.nextspeed.z = v;
        }
        if (window.keyisdown[38]) {
            player.nextspeed.x = -v;
            player.nextspeed.z = v;
        }
        if (window.keyisdown[40]) {
            player.nextspeed.x = v;
            player.nextspeed.z = -v;
        }

        player.speed = BABYLON.Vector3.Lerp(player.speed, player.nextspeed, 0.1);

        // Turn to direction
        if (player.speed.length() > 0.01) {
            tempv.copyFrom(player.speed);
            let dot = BABYLON.Vector3.Dot(tempv.normalize(), BABYLON.Axis.Z );
            let al = Math.acos(dot);
            if (tempv.x < 0.0) { al = Math.PI * 2.0 - al; }
            if (window.keyisdown[9]) {
                console.log('dot,al:', dot, al);
            }
            if (al > player.rotation.y) {
                let t = Math.PI / 30;
            } else {
                let t = -Math.PI / 30;
            }
            let ad = Math.abs(player.rotation.y - al);
            if (ad > Math.PI) {
                t = -t;
            }
            if (ad < Math.PI / 15) {
                t = 0;
            }
            player.rotation.y += t;
            if (player.rotation.y > Math.PI * 2) { player.rotation.y -= Math.PI * 2; }
            if (player.rotation.y < 0 ) { player.rotation.y += Math.PI * 2; }
        }

        player.moveWithCollisions(player.speed);

        if (player.position.x > 60.0) { player.position.x = 60.0; }
        if (player.position.x < -60.0) { player.position.x = -60.0; }
        if (player.position.z > 60.0) { player.position.z = 60.0; }
        if (player.position.z < -60.0) { player.position.z = -60.0; }

        player.nexttorch = lightImpostor.getAbsolutePosition();
        torch.position.copyFrom(player.nexttorch);
        torch.intensity = 0.7 + Math.random() * 0.1;
        torch.position.x += Math.random() * 0.125 - 0.0625;
        torch.position.z += Math.random() * 0.125 - 0.0625;


        camera.position.x = player.position.x + 25;
        camera.position.y = player.position.y + 25;
        camera.position.z = player.position.z - 25;
    });
*/
