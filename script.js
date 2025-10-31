(function(){
    var script = {
 "downloadEnabled": false,
 "start": "this.playAudioList([this.audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_05F9F2F7_3BCA_4EFB_4190_62AB2C2C1D39.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "horizontalAlign": "left",
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_18653105_39BA_4B1C_41B4_B6751C22E31C",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "definitions": [{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1",
 "width": 960,
 "label": "WhatsApp Image 2025-10-27 at 5.58.20 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1_t.jpg",
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 124,
  "yaw": -11.66,
  "pitch": 0
 },
 "id": "camera_0540B34F_3BCA_4F2C_41C3_E49F163C3882",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
 "label": "Art Corner",
 "overlays": [
  "this.overlay_21A4D55E_39CE_4B2D_41A6_DAF8DA2AA4F7",
  "this.overlay_21B6A181_39CA_4B14_418D_EFA91818C905",
  "this.overlay_2516E40B_39CA_C92B_41C2_76F87D78D14C",
  "this.overlay_23BF57EC_39DA_56ED_41C9_18C8B3F679A3",
  "this.overlay_1C7C0EB0_397A_5975_41C5_18213A1541AD",
  "this.overlay_116CE079_3979_C9F4_41C1_6A995A143999",
  "this.popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146",
  "this.overlay_0B5DE8DE_3B57_D92D_41B2_E4520D7D79A5",
  "this.overlay_14B2EAF9_3B59_FEF4_41B4_2B4FEC5EAEC0",
  "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -159.41,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": -43.43
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -50.86,
   "distance": 1,
   "panorama": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
   "backwardYaw": 79.6
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.2,
   "distance": 1,
   "panorama": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "backwardYaw": -74.39
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_3607391A_394E_5B35_41C2_04B1EF66E802_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.97,
  "pitch": 0
 },
 "id": "camera_05577340_3BCA_4F14_41CD_38D5355C0612",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 7.06,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": -134.03
  }
 ],
 "label": "Enterance",
 "hfovMin": "118%",
 "id": "panorama_360612BC_397A_496D_41A0_E97535E7DA58",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_298A7556_395E_CB3C_41AA_71525C995BDD",
  "this.overlay_282F8715_39CA_573C_41BC_0158A440DBCA",
  "this.overlay_2BEEBFC2_39DB_B715_4198_F24A47E417F6",
  "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_t.jpg",
 "hfovMax": 131
},
{
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 127,
  "yaw": 47.73,
  "pitch": 0
 },
 "id": "camera_0576F35A_3BCA_4F34_41BF_1FEB1B13640E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3",
 "width": 960,
 "label": "WhatsApp Image 2025-10-27 at 5.58.19 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3_t.jpg",
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.28,
  "pitch": 0
 },
 "id": "camera_7ABDB381_3BCA_4F14_41B3_949AFE64AC48",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2",
 "width": 1280,
 "label": "WhatsApp Image 2025-10-27 at 5.58.17 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2_t.jpg",
 "height": 960
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.74,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_1D140E30_3B4A_5975_419C_00518C901BEA",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_1D140E30_3B4A_5975_419C_00518C901BEA_0_1.png",
    "class": "ImageResourceLevel",
    "width": 819,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -17.75,
 "hideEasing": "cubic_out",
 "yaw": 105.56
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "levels": [
  {
   "url": "media/popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1920,
   "height": 1080
  },
  {
   "url": "media/popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2_0_1.png",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2_0_2.png",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_0134DB52_3BBA_5F3A_41CC_8F1529F085F3"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9",
 "width": 1280,
 "label": "WhatsApp Image 2025-10-27 at 6.02.30 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9_t.jpg",
 "height": 960
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.79,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2_0_1.png",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 22.59,
 "hideEasing": "cubic_out",
 "yaw": -39.17
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": -172.94,
  "pitch": 0
 },
 "id": "camera_054CF347_3BCA_4F1B_419A_E257CC44E605",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8",
 "width": 960,
 "label": "WhatsApp Image 2025-10-27 at 5.57.59 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8_t.jpg",
 "height": 1280
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11",
 "width": 960,
 "label": "WhatsApp Image 2025-10-27 at 5.58.23 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11_t.jpg",
 "height": 1280
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -132.27,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": 107.11
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
 "label": "PlayZone",
 "overlays": [
  "this.overlay_1F46BF38_3976_5774_418C_6BF2011262DE",
  "this.overlay_1D1F187B_3976_B9EB_41C7_9E22A507C391",
  "this.overlay_1DF55EC5_3949_F91F_41AB_D7F06786CAB0",
  "this.overlay_102A7CE5_3949_D91F_41C6_EB735EA64528",
  "this.overlay_13AF537F_394A_4FEB_41C4_643D884A6B80",
  "this.popup_179B54D3_3B4A_4934_41C1_3F975D14902C",
  "this.overlay_15BB0D2C_3B4F_BB6C_41C6_84D47416F535",
  "this.overlay_09C0CB01_3B4E_7F14_41CC_87360621593C",
  "this.overlay_0C038C08_3B4E_7915_41C4_804107972E0D",
  "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_t.jpg",
 "hfovMax": 134
},
{
 "levels": [
  {
   "url": "media/popup_179B54D3_3B4A_4934_41C1_3F975D14902C_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1350
  },
  {
   "url": "media/popup_179B54D3_3B4A_4934_41C1_3F975D14902C_0_1.png",
   "class": "ImageResourceLevel",
   "width": 819,
   "height": 1024
  },
  {
   "url": "media/popup_179B54D3_3B4A_4934_41C1_3F975D14902C_0_2.png",
   "class": "ImageResourceLevel",
   "width": 409,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_013C9B5C_3BBA_5F2C_41A3_885A0A86D3DF"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.47,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146_0_1.png",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 31.46,
 "hideEasing": "cubic_out",
 "yaw": 4.26
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6",
 "width": 1280,
 "label": "WhatsApp Image 2025-10-27 at 5.58.00 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6_t.jpg",
 "height": 960
},
{
 "levels": [
  {
   "url": "media/popup_1D140E30_3B4A_5975_419C_00518C901BEA_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 1350
  },
  {
   "url": "media/popup_1D140E30_3B4A_5975_419C_00518C901BEA_0_1.png",
   "class": "ImageResourceLevel",
   "width": 819,
   "height": 1024
  },
  {
   "url": "media/popup_1D140E30_3B4A_5975_419C_00518C901BEA_0_2.png",
   "class": "ImageResourceLevel",
   "width": 409,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_013ABB53_3BBA_5F3B_41C9_6DA26523291F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 124,
  "yaw": -100.4,
  "pitch": 0
 },
 "id": "camera_05129311_3BCA_4F34_41C9_01836FEAAC30",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "levels": [
  {
   "url": "media/popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1920,
   "height": 1080
  },
  {
   "url": "media/popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1_0_1.png",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1_0_2.png",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_046D1109_3BCB_CB17_41CA_C2C9BE638A93"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.2,
  "pitch": 0
 },
 "id": "camera_05384327_3BCA_4F1B_41C1_70793D66BD84",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0.25,
  "pitch": 0
 },
 "id": "camera_056AE362_3BCA_4F14_41C2_7030CB57182E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 4.14,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_1DE26080_3B4B_C914_4171_D083DC39B2E0",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_1DE26080_3B4B_C914_4171_D083DC39B2E0_0_0.png",
    "class": "ImageResourceLevel",
    "width": 940,
    "height": 788
   },
   {
    "url": "media/popup_1DE26080_3B4B_C914_4171_D083DC39B2E0_0_1.png",
    "class": "ImageResourceLevel",
    "width": 512,
    "height": 429
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -11.44,
 "hideEasing": "cubic_out",
 "yaw": 64.04
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.89,
  "pitch": 0
 },
 "id": "camera_05229338_3BCA_4F74_41CB_B8F24DF499D6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -100.8,
  "pitch": 0
 },
 "id": "camera_7AA78390_3BCA_4F35_4185_D3710AA128DA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PhotoAlbum",
 "playList": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_AlbumPlayList",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB",
 "label": "Photo Album Yellow and Blue Modern Cleaning Services Poster",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_t.png"
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB"
  }
 ],
 "id": "mainPlayList"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_36CD60BE_3956_496D_41AF_F08047728783",
 "label": "Story Area",
 "overlays": [
  "this.panorama_36CD60BE_3956_496D_41AF_F08047728783_tcap0",
  "this.overlay_0DB5C4C2_3B49_C914_41C0_81745A3579C6",
  "this.overlay_0D522CEB_3BB6_5AEB_41B3_F01CB8E27A8E",
  "this.overlay_0D6FAC9F_3BB7_B92B_41BE_634481DFDCA8",
  "this.overlay_0B9D8DDB_3BB7_DB2B_41C5_8BD9DF0B9ED1"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -179.75,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": -177.62
  }
 ],
 "hfovMax": 130
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_05F9F2F7_3BCA_4EFB_4190_62AB2C2C1D39"
},
{
 "class": "PlayList",
 "items": [
  {
   "camera": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "camera": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783_camera",
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 0)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -72.89,
  "pitch": 0
 },
 "id": "camera_7ACFE39F_3BCA_4F2B_41CB_63D2A758641B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 124,
  "yaw": 8.86,
  "pitch": -2.46
 },
 "id": "panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.26,
  "pitch": 0
 },
 "id": "camera_7AB21389_3BCA_4F14_41C6_EB191FCF4549",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7",
 "width": 1280,
 "label": "WhatsApp Image 2025-10-27 at 5.57.55 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7_t.jpg",
 "height": 960
},
{
 "class": "MapPlayer",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "movementMode": "constrained"
},
{
 "levels": [
  {
   "url": "media/popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1920,
   "height": 1080
  },
  {
   "url": "media/popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146_0_1.png",
   "class": "ImageResourceLevel",
   "width": 1024,
   "height": 576
  },
  {
   "url": "media/popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146_0_2.png",
   "class": "ImageResourceLevel",
   "width": 512,
   "height": 288
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_013FEB54_3BBA_5F3D_41A3_EC8D0C7C3141"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 20.59,
  "pitch": 0
 },
 "id": "camera_7A9EB36A_3BCA_4F14_419C_AC24A079986C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.38,
  "pitch": 0
 },
 "id": "camera_05026320_3BCA_4F15_41C3_975FB9016F18",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.79,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_179B54D3_3B4A_4934_41C1_3F975D14902C",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_179B54D3_3B4A_4934_41C1_3F975D14902C_0_1.png",
    "class": "ImageResourceLevel",
    "width": 819,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -16.27,
 "hideEasing": "cubic_out",
 "yaw": -35.3
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 168.34,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": -88.8
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 79.6,
   "distance": 1,
   "panorama": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "backwardYaw": -50.86
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783"
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
 "label": "Scribble Wall",
 "overlays": [
  "this.overlay_1B6BA114_394E_CB3D_41B0_0A60CB212A0A",
  "this.overlay_249FEB5B_3956_BF2B_41B4_FDF221BA6B7F",
  "this.overlay_182E55CC_395A_CB2D_41BF_D7F362F1DD09",
  "this.overlay_1D35054C_397E_4B2D_4199_50B68FFC2480",
  "this.overlay_2789FC51_397A_B937_4191_627122BAA68C",
  "this.overlay_2792D623_397B_C914_41BE_E541CB43865F",
  "this.overlay_175118DF_3B5A_F92B_41B6_40A473BBCB23",
  "this.overlay_152780A7_3B5A_491C_41B1_9726AF7ADBCA",
  "this.overlay_1496877D_3B5A_57EF_41AD_B5B52E8741DE",
  "this.overlay_0F56581F_3B5E_B92B_41A3_5755A2360806",
  "this.overlay_13EF7E95_3B5E_793F_41C2_C184CC5C0147",
  "this.overlay_140C17AE_3B5F_D76D_41CA_EBF99C2F1B1C",
  "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_tcap0",
  "this.popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.ogg",
  "mp3Url": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.mp3"
 },
 "id": "audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1",
 "data": {
  "label": "Hope (mp3cut.net)"
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
 "label": "Classroom",
 "overlays": [
  "this.overlay_2391302F_39F9_C96C_41C3_B5938B6C07E6",
  "this.overlay_2F8A81FA_39FE_4AF4_41C7_2B221241773D",
  "this.overlay_2FD0A535_39FF_CB7F_41BA_9FB8CEF087CC",
  "this.overlay_2CC3C8D7_39FE_593B_41CA_FB12F5972F06",
  "this.overlay_2EF25E19_39F9_F937_41CA_954A85CC98DC",
  "this.overlay_19B1DDDB_39C9_BB34_41AD_B2ED2D99542C",
  "this.overlay_1AD46A8C_397A_792D_41BA_BC7C8ADBA4EB",
  "this.overlay_1EAA557F_3976_CBEB_41C9_218BB69BBC31",
  "this.overlay_1D40F5C0_3976_4B15_41CC_A46B2C4A3322",
  "this.overlay_13835188_3B56_4B15_41BD_C4E50A75468D",
  "this.overlay_1FCEFEB1_3B5A_F977_41C3_B04652201E80",
  "this.overlay_1C4E9748_3B5B_F715_41B5_B99768F59920",
  "this.overlay_1EB0A9A3_3B5E_7B14_41CA_684EE8CF2531",
  "this.overlay_1F566430_3B5E_4975_41C3_379791BF832D",
  "this.overlay_17B765EF_3B59_CAEC_4188_1136BDC48C68",
  "this.overlay_15018261_3B5A_4914_41A2_46A8BF996C74",
  "this.overlay_16015D08_3B59_DB15_41C1_CFBFA2DE7100",
  "this.overlay_10CD1F90_3B56_B735_41CA_2756A5DEF98F",
  "this.overlay_109717BE_3B57_B76D_41CD_016D2FDE1BE0",
  "this.overlay_13386816_3B4F_D93C_41B3_E3807DE16D59",
  "this.popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2",
  "this.popup_1DE26080_3B4B_C914_4171_D083DC39B2E0",
  "this.popup_1D140E30_3B4A_5975_419C_00518C901BEA",
  "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -134.03,
   "distance": 1,
   "panorama": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58",
   "backwardYaw": 7.06
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.8,
   "distance": 1,
   "panorama": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
   "backwardYaw": 168.34
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 107.11,
   "distance": 1,
   "panorama": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
   "backwardYaw": -132.27
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.62,
   "distance": 1,
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783",
   "backwardYaw": -179.75
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -43.43,
   "distance": 1,
   "panorama": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "backwardYaw": -159.41
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 0.74,
   "distance": 1,
   "panorama": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "backwardYaw": 171.71
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 107.11,
   "distance": 1,
   "panorama": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "backwardYaw": 173.72
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 45.75,
   "distance": 1,
   "panorama": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "backwardYaw": 173.72
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.45,
  "pitch": 0
 },
 "id": "camera_7ADB9398_3BCA_4F34_41A3_FE289B876374",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
 "label": "Storage",
 "overlays": [
  "this.overlay_1F954BAD_3976_7F6F_41CB_8A783A5550D2",
  "this.overlay_19ECD474_3976_49FD_41BA_BFA5D09A1160",
  "this.overlay_1D2D3AEE_397E_5EED_41AF_214622735F80",
  "this.overlay_2783F5FD_397E_4AEF_4183_CD1F399828E4",
  "this.overlay_151C54EF_3B56_4AEB_41BF_1044DD99439E",
  "this.overlay_14AF353D_3B56_4B6C_41C5_0C3D37560C92",
  "this.overlay_08CE611B_3B49_CB2B_41CA_EA09FFFEDFA2",
  "this.overlay_0FCE7611_3B4A_C937_41AF_E6CEAD0B7252",
  "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 173.72,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": 107.11
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.55,
   "distance": 1,
   "panorama": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "backwardYaw": 64.04
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85"
  }
 ],
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.57,
  "pitch": 0
 },
 "id": "camera_05188309_3BCA_4F14_41BB_D9E2461A4EE1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5",
 "width": 960,
 "label": "WhatsApp Image 2025-10-27 at 5.57.59 PM (1)",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5_t.jpg",
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 125,
  "yaw": -115.96,
  "pitch": 0
 },
 "id": "camera_7AC4F3A7_3BCA_4F1C_41A3_4BC7A161EA34",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 125,
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_36CD60BE_3956_496D_41AF_F08047728783_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "id": "map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "width": 1600,
 "label": "WhatsApp Image 2025-10-27 at 2.28.11 PM",
 "image": {
  "levels": [
   {
    "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D.jpeg",
    "class": "ImageResourceLevel",
    "width": 1600,
    "height": 1497
   },
   {
    "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_lq.jpeg",
    "class": "ImageResourceLevel",
    "tags": "preload",
    "width": 264,
    "height": 248
   }
  ],
  "class": "ImageResource"
 },
 "minimumZoomFactor": 0.5,
 "overlays": [
  "this.overlay_1948E7BC_3959_D76C_41A1_32EFB2D159B9"
 ],
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "thumbnailUrl": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_t.jpg",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "maximumZoomFactor": 1.2,
 "height": 1497
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "class": "MapPlayListItem",
   "media": "this.map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_05F9D2F7_3BCA_4EFB_41C6_48D82A43D023"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 171.71,
   "distance": 1,
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "backwardYaw": 0.74
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -74.39,
   "distance": 1,
   "panorama": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "backwardYaw": 79.2
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 64.04,
   "distance": 1,
   "panorama": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "backwardYaw": -106.55
  }
 ],
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "id": "panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
 "label": "Art Zone",
 "overlays": [
  "this.overlay_2267F625_395E_491C_41A0_C96742CBCAB9",
  "this.overlay_18AE0940_395E_DB15_41B3_1A48DE91B086",
  "this.overlay_279787AD_397F_F76C_41BC_567EAAA57095",
  "this.overlay_1B4DC94C_397E_BB2D_41C5_257588194E20",
  "this.overlay_084F2F96_3B59_B73D_41CA_50ADA5AA0C73",
  "this.overlay_0EE0E2B5_3B5A_497F_41BC_1C7707AEF76A",
  "this.overlay_0E1477E2_3B5B_B715_41C7_F3C198C004C3",
  "this.overlay_0BC3EC2A_3B5A_D915_4191_7A11FBA3BC0A",
  "this.overlay_0B4702F6_3B5A_4EFD_41C8_BDD1993E064D",
  "this.overlay_097B83BD_3B5A_4F6F_41CA_749E3D2C88F8",
  "this.overlay_0AE2BEFB_3B59_D6F4_41B4_00928A6C4D0B",
  "this.overlay_10C4625D_3B56_492F_41BA_C90EE3656BBB",
  "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_tcap0"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "cardboardMenu": "this.Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_t.jpg",
 "hfovMax": 131
},
{
 "fontColor": "#FFFFFF",
 "class": "Menu",
 "rollOverBackgroundColor": "#000000",
 "children": [
  {
   "class": "MenuItem",
   "label": "Enterance",
   "click": "this.mainPlayList.set('selectedIndex', 0)"
  },
  {
   "class": "MenuItem",
   "label": "Classroom",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  },
  {
   "class": "MenuItem",
   "label": "Art Corner",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  },
  {
   "class": "MenuItem",
   "label": "Scribble Wall",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  },
  {
   "class": "MenuItem",
   "label": "Art Zone",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  },
  {
   "class": "MenuItem",
   "label": "Storage",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  },
  {
   "class": "MenuItem",
   "label": "PlayZone",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  },
  {
   "class": "MenuItem",
   "label": "Story Area",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "label": "Media",
 "id": "Menu_05F112FA_3BCA_4EF5_41BC_B28061C4CC90",
 "opacity": 0.4,
 "fontFamily": "Arial",
 "selectedFontColor": "#FFFFFF",
 "rollOverOpacity": 0.8,
 "selectedBackgroundColor": "#202020",
 "backgroundColor": "#404040",
 "rollOverFontColor": "#FFFFFF"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 126,
  "yaw": 2.51,
  "pitch": -4.07
 },
 "displayOriginPosition": {
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": 2.51,
  "stereographicFactor": 0.18,
  "pitch": -90
 },
 "id": "panorama_360612BC_397A_496D_41A0_E97535E7DA58_camera",
 "displayMovements": [
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000,
   "easing": "linear"
  },
  {
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "targetHfov": 126,
   "duration": 3000,
   "targetPitch": -4.07
  }
 ],
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 129.14,
  "pitch": 0
 },
 "id": "camera_052E7330_3BCA_4F74_4198_B0ABF13DB6E0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 125,
  "yaw": 105.61,
  "pitch": 0
 },
 "id": "camera_050A3318_3BCA_4F35_418D_9374DF40CAB0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 127,
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10",
 "width": 1280,
 "label": "WhatsApp Image 2025-10-27 at 5.58.29 PM",
 "image": {
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10_t.jpg",
 "height": 960
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 8.94,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1_0_1.png",
    "class": "ImageResourceLevel",
    "width": 1024,
    "height": 576
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.83,
 "hideEasing": "cubic_out",
 "yaw": 12.89
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -6.28,
  "pitch": 0
 },
 "id": "camera_7A883379_3BCA_4FF7_41A4_172BBE7E1837",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 125,
  "yaw": -8.29,
  "pitch": 0
 },
 "id": "camera_7A942372_3BCA_4FF4_41AC_D81C009FD765",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 55,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": true,
 "overflow": "scroll",
 "height": 641,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--SETTINGS"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Image_222C05C8_394B_CB14_418C_C97785513D96"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 15,
 "propagateClick": true,
 "height": 133,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--STICKER"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.64,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 0,
 "overflow": "visible",
 "height": 118,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "--MENU"
 },
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--INFO photo"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--INFO photoalbum"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--PANORAMA LIST"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--LOCATION"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--FLOORPLAN"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--PHOTOALBUM"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.6,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "creationPolicy": "inAdvance",
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "--REALTOR"
 },
 "visible": false,
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Futura Bk BT",
 "horizontalAlign": "left",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 23,
 "width": 106,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "textShadowOpacity": 1,
 "text": "Initiatives",
 "top": 162,
 "propagateClick": true,
 "height": 29,
 "minWidth": 1,
 "fontSize": "25px",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "textShadowVerticalLength": 0,
 "shadow": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "textShadowHorizontalLength": 0
},
{
 "textShadowBlurRadius": 10,
 "fontFamily": "Franklin Gothic Medium",
 "horizontalAlign": "left",
 "id": "Label_18653105_39BA_4B1C_41B4_B6751C22E31C",
 "left": "1.06%",
 "width": 131,
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "textShadowColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "textShadowOpacity": 1,
 "text": "Val-ED ",
 "top": 119,
 "propagateClick": true,
 "height": 46,
 "minWidth": 1,
 "fontSize": "45px",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Label",
 "textShadowVerticalLength": 0,
 "shadow": false,
 "data": {
  "name": "text 1"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "fontColor": "#FFFFFF",
 "textShadowHorizontalLength": 0
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "UIComponent73566"
 },
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "shadow": false,
 "data": {
  "name": "ZoomImage73567"
 },
 "visible": false
},
{
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.3,
 "iconHeight": 20,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 5,
 "right": 10,
 "paddingLeft": 5,
 "borderRadius": 0,
 "minHeight": 0,
 "pressedIconColor": "#888888",
 "borderColor": "#000000",
 "rollOverIconColor": "#666666",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "iconColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "label": "",
 "borderSize": 0,
 "paddingBottom": 5,
 "gap": 5,
 "paddingTop": 5,
 "fontStyle": "normal",
 "class": "CloseButton",
 "iconLineWidth": 5,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 20,
 "data": {
  "name": "CloseButton73568"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "layout": "horizontal",
 "visible": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_16BFA0F6_3B56_CAFD_41B6_5B87E8F22146, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_013FEB54_3BBA_5F3D_41A3_EC8D0C7C3141, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.26,
   "hfov": 5.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 31.46
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_271362F8_39DA_4EF5_4191_B8B1372B49BD",
   "pitch": 31.46,
   "yaw": 4.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.47,
   "distance": 100
  }
 ],
 "id": "overlay_21A4D55E_39CE_4B2D_41A6_DAF8DA2AA4F7",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776, this.camera_05129311_3BCA_4F34_41C9_01836FEAAC30); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -50.86,
   "hfov": 9.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.45
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_011D8B3B_3BBA_5F6B_41B8_F11CCF013848",
   "pitch": -2.45,
   "yaw": -50.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.69,
   "distance": 100
  }
 ],
 "id": "overlay_21B6A181_39CA_4B14_418D_EFA91818C905",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3, this.camera_050A3318_3BCA_4F35_418D_9374DF40CAB0); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.2,
   "hfov": 9.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.6
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_011DCB3B_3BBA_5F6B_41C7_005A74AC29A8",
   "pitch": -16.6,
   "yaw": 79.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.29,
   "distance": 100
  }
 ],
 "id": "overlay_2516E40B_39CA_C92B_41C2_76F87D78D14C",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_05188309_3BCA_4F14_41BB_D9E2461A4EE1); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.41,
   "hfov": 4.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.93
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_26F1373F_395A_576C_41CC_971B472C218D",
   "pitch": -48.93,
   "yaw": -159.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.95,
   "distance": 100
  }
 ],
 "id": "overlay_23BF57EC_39DA_56ED_41C9_18C8B3F679A3",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 159.9,
   "hfov": 22.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 165
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.6
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.9,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 691,
      "height": 570
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.6,
   "hfov": 22.09
  }
 ],
 "id": "overlay_1C7C0EB0_397A_5975_41C5_18213A1541AD",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -168.95,
   "hfov": 15.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 194,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -168.95,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 466,
      "height": 479
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.95,
   "hfov": 15.01
  }
 ],
 "id": "overlay_116CE079_3979_C9F4_41C1_6A995A143999",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.69,
   "hfov": -34.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 58,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -169.91
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 434,
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -169.91,
   "yaw": 117.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": -34.94,
   "distance": 50
  }
 ],
 "id": "overlay_0B5DE8DE_3B57_D92D_41B2_E4520D7D79A5",
 "data": {
  "label": "A"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.84,
   "hfov": 14.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 58,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 434,
      "height": 118
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.37,
   "yaw": -49.84,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.05,
   "distance": 50
  }
 ],
 "id": "overlay_14B2EAF9_3B59_FEF4_41B4_2B4FEC5EAEC0",
 "data": {
  "label": "Scribble Area"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_3607391A_394E_5B35_41C2_04B1EF66E802_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.41,
   "hfov": 55.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 158,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.53
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 6.41,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1627,
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.53,
   "hfov": 55.74
  }
 ],
 "id": "overlay_298A7556_395E_CB3C_41AA_71525C995BDD",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7,
   "hfov": 25.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 800,
      "height": 854
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.43,
   "hfov": 25.75
  }
 ],
 "id": "overlay_282F8715_39CA_573C_41BC_0158A440DBCA",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_05577340_3BCA_4F14_41CD_38D5355C0612); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.06,
   "hfov": 6.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.36
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.06,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.36,
   "hfov": 6.97
  }
 ],
 "id": "overlay_2BEEBFC2_39DB_B715_4198_F24A47E417F6",
 "data": {
  "label": "Image"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0",
 "distance": 50
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "shadow": false,
 "data": {
  "name": "IconButton HS "
 },
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "visible": false,
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "paddingRight": 0,
 "right": 30,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 8,
 "height": 75,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "propagateClick": false,
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "paddingRight": 0,
 "right": 10,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "propagateClick": false,
 "height": "8%",
 "minWidth": 70,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.68,
   "hfov": 37.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 166
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.88
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -10.68,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1218,
      "height": 1016
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.88,
   "hfov": 37.94
  }
 ],
 "id": "overlay_1F46BF38_3976_5774_418C_6BF2011262DE",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -58.91,
   "hfov": 18.73,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 137,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.09
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -58.91,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 584,
      "height": 850
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.09,
   "hfov": 18.73
  }
 ],
 "id": "overlay_1D1F187B_3976_B9EB_41C7_9E22A507C391",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_179B54D3_3B4A_4934_41C1_3F975D14902C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_013C9B5C_3BBA_5F2C_41A3_885A0A86D3DF, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.3,
   "hfov": 7.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -35.3,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.27,
   "hfov": 7.23
  }
 ],
 "id": "overlay_1DF55EC5_3949_F91F_41AB_D7F06786CAB0",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.72,
   "hfov": 7.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 18.72,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.48,
   "hfov": 7.43
  }
 ],
 "id": "overlay_102A7CE5_3949_D91F_41C6_EB735EA64528",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_05229338_3BCA_4F74_41CB_B8F24DF499D6); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -132.27,
   "hfov": 6.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -132.27,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -22.3,
   "hfov": 6.97
  }
 ],
 "id": "overlay_13AF537F_394A_4FEB_41C4_643D884A6B80",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 113.68,
   "hfov": 46.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 133,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 113.68,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 1373,
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.73,
   "hfov": 46.78
  }
 ],
 "id": "overlay_15BB0D2C_3B4F_BB6C_41C6_84D47416F535",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.27,
   "hfov": 9.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.77
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_012B7B43_3BBA_5F1B_41C4_DDCF9F8B1954",
   "pitch": -4.77,
   "yaw": 114.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.66,
   "distance": 100
  }
 ],
 "id": "overlay_09C0CB01_3B4E_7F14_41CC_87360621593C",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.57,
   "hfov": 20.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 47,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 645,
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.07,
   "yaw": 116.57,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.85,
   "distance": 50
  }
 ],
 "id": "overlay_0C038C08_3B4E_7915_41C4_804107972E0D",
 "data": {
  "label": "Story Area"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_tcap0",
 "distance": 50
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.29",
     "y": "0.62",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.64",
     "y": "0.71",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.35",
     "y": "0.54",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.69",
     "y": "0.47",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.53",
     "y": "0.39",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "y": "0.31",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.29",
     "y": "0.43",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.42",
     "y": "0.59",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.58",
     "y": "0.44",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.63",
     "y": "0.30",
     "zoomFactor": 1.1
    },
    "class": "MovementPhotoCamera",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "easing": "linear"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11"
  }
 ],
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_AlbumPlayList"
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_36CD60BE_3956_496D_41AF_F08047728783_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.4,
   "hfov": 14.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 164,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -134.4,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 461,
      "height": 558
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.46,
   "hfov": 14.84
  }
 ],
 "id": "overlay_0DB5C4C2_3B49_C914_41C0_81745A3579C6",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -99.11,
   "hfov": 30,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_1_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 137
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.93
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -99.11,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 949,
      "height": 650
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.93,
   "hfov": 30
  }
 ],
 "id": "overlay_0D522CEB_3BB6_5AEB_41B3_F01CB8E27A8E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -2.89,
   "hfov": 7.49,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.22,
   "hfov": 7.49
  }
 ],
 "id": "overlay_0D6FAC9F_3BB7_B92B_41BE_634481DFDCA8",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_05026320_3BCA_4F15_41C3_975FB9016F18); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.75,
   "hfov": 7.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -179.75,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.54,
   "hfov": 7.06
  }
 ],
 "id": "overlay_0B9D8DDB_3BB7_DB2B_41C5_8BD9DF0B9ED1",
 "data": {
  "label": "Image"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 14.19,
   "hfov": 35.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 75,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 1134,
      "height": 240
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 13,
   "yaw": 14.19,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 35.74,
   "distance": 50
  }
 ],
 "id": "overlay_1B6BA114_394E_CB3D_41B0_0A60CB212A0A",
 "data": {
  "label": "Scribble Board"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_7FB4A12B_3BCA_4B6B_41C3_6563210881A1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_046D1109_3BCB_CB17_41CA_C2C9BE638A93, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.89,
   "hfov": 8.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.83
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 12.89,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 276,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.83,
   "hfov": 8.94
  }
 ],
 "id": "overlay_249FEB5B_3956_BF2B_41B4_FDF221BA6B7F",
 "data": {
  "label": "A"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_05384327_3BCA_4F1B_41C1_70793D66BD84); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 168.34,
   "hfov": 4.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.82
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 168.34,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 163,
      "height": 163
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.82,
   "hfov": 4.53
  }
 ],
 "id": "overlay_182E55CC_395A_CB2D_41BF_D7F362F1DD09",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.72,
   "hfov": 12.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_6_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 155,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.72,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 392,
      "height": 505
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.07,
   "hfov": 12.63
  }
 ],
 "id": "overlay_1D35054C_397E_4B2D_4199_50B68FFC2480",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.98,
   "hfov": 4.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_7_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 60,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.62
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -177.98,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 138,
      "height": 456
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.62,
   "hfov": 4.46
  }
 ],
 "id": "overlay_2789FC51_397A_B937_4191_627122BAA68C",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.77,
   "hfov": 15.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 186
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.95
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -155.77,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 488,
      "height": 454
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.95,
   "hfov": 15.7
  }
 ],
 "id": "overlay_2792D623_397B_C914_41BE_E541CB43865F",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 74.99,
   "hfov": 44.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 117,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 74.99,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 1206,
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.97,
   "hfov": 44.31
  }
 ],
 "id": "overlay_175118DF_3B5A_F92B_41B6_40A473BBCB23",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802, this.camera_052E7330_3BCA_4F74_4198_B0ABF13DB6E0); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 79.6,
   "hfov": 9.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_10_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0122BB3C_3BBA_5F6D_41B3_9709099EAE8E",
   "pitch": -2.51,
   "yaw": 79.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.69,
   "distance": 100
  }
 ],
 "id": "overlay_152780A7_3B5A_491C_41B1_9726AF7ADBCA",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.76,
   "hfov": 26.03,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_11_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 59,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.84
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 808,
      "height": 217
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.84,
   "yaw": 78.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.03,
   "distance": 50
  }
 ],
 "id": "overlay_1496877D_3B5A_57EF_41AD_B5B52E8741DE",
 "data": {
  "label": "BOOK NOOK"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.25,
   "hfov": 36.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_12_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 138,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -102.25,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 1166,
      "height": 1682
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01,
   "hfov": 36.42
  }
 ],
 "id": "overlay_0F56581F_3B5E_B92B_41A3_5755A2360806",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -107.06,
   "hfov": 9.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.51
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_01211B3C_3BBA_5F6D_41C9_4A82BF50D018",
   "pitch": -2.51,
   "yaw": -107.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.69,
   "distance": 100
  }
 ],
 "id": "overlay_13EF7E95_3B5E_793F_41C2_C184CC5C0147",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.26,
   "hfov": 20.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_14_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 41,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.39
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 619,
      "height": 240
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.39,
   "yaw": -105.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 20.02,
   "distance": 50
  }
 ],
 "id": "overlay_140C17AE_3B5F_D76D_41CA_EBF99C2F1B1C",
 "data": {
  "label": "Story Area"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_1D1BB061_3B4A_4917_41AC_CD9D33BB14B2, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_0134DB52_3BBA_5F3A_41CC_8F1529F085F3, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.17,
   "hfov": 3.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.59
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_271482F8_39DA_4EF5_41AF_6724EE02B625",
   "pitch": 22.59,
   "yaw": -39.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.79,
   "distance": 100
  }
 ],
 "id": "overlay_2391302F_39F9_C96C_41C3_B5938B6C07E6",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776, this.camera_0540B34F_3BCA_4F2C_41C3_E49F163C3882); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.8,
   "hfov": 6.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_271402F8_39DA_4EF5_41C0_B79824B92D3C",
   "pitch": -3.47,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.45,
   "distance": 100
  }
 ],
 "id": "overlay_2F8A81FA_39FE_4AF4_41C7_2B221241773D",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_36CD60BE_3956_496D_41AF_F08047728783, this.camera_056AE362_3BCA_4F14_41C2_7030CB57182E); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.62,
   "hfov": 6.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.08
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_7C3D0C29_3BCF_F917_417A_9F0701B3B5FA",
   "pitch": -3.08,
   "yaw": -177.62,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.46,
   "distance": 100
  }
 ],
 "id": "overlay_2FD0A535_39FF_CB7F_41BA_9FB8CEF087CC",
 "data": {
  "label": "Circle Arrow 05"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_1D140E30_3B4A_5975_419C_00518C901BEA, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, this.ImageResource_013ABB53_3BBA_5F3B_41C9_6DA26523291F, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.56,
   "hfov": 4.02,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.75
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.56,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 130,
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.75,
   "hfov": 4.02
  }
 ],
 "id": "overlay_2CC3C8D7_39FE_593B_41CA_FB12F5972F06",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_1DE26080_3B4B_C914_4171_D083DC39B2E0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundOpacity':0.3,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20,'borderColor':'#000000'}, null, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.04,
   "hfov": 4.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 18,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 64.04,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 130,
      "height": 111
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.44,
   "hfov": 4.14
  }
 ],
 "id": "overlay_2EF25E19_39F9_F937_41CA_954A85CC98DC",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_360612BC_397A_496D_41A0_E97535E7DA58, this.camera_054CF347_3BCA_4F1B_419A_E257CC44E605); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -134.03,
   "hfov": 7.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_8_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.98
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_23AAC23C_39CE_496D_41BA_51E2FD83B237",
   "pitch": -7.98,
   "yaw": -134.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.46,
   "distance": 100
  }
 ],
 "id": "overlay_19B1DDDB_39C9_BB34_41AD_B2ED2D99542C",
 "data": {
  "label": "Circle 360 1"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40, this.camera_7A883379_3BCA_4FF7_41A4_172BBE7E1837); this.mainPlayList.set('selectedIndex', 5); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 107.11,
   "hfov": 6.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_9_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.16
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1F271A9E_3AF6_792D_41C5_3B209ECB8A49",
   "pitch": -13.16,
   "yaw": 107.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.3,
   "distance": 100
  }
 ],
 "id": "overlay_1AD46A8C_397A_792D_41BA_BC7C8ADBA4EB",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.56,
   "hfov": 22.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_10_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 193
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.02
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 68.56,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 703,
      "height": 679
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.02,
   "hfov": 22.46
  }
 ],
 "id": "overlay_1EAA557F_3976_CBEB_41C9_218BB69BBC31",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.18,
   "hfov": 21.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_11_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 192
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 115.18,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_11_0.png",
      "class": "ImageResourceLevel",
      "width": 660,
      "height": 634
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.32,
   "hfov": 21.12
  }
 ],
 "id": "overlay_1D40F5C0_3976_4B15_41CC_A46B2C4A3322",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.15,
   "hfov": 27.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_12_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 136,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -1.15,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_12_0.png",
      "class": "ImageResourceLevel",
      "width": 864,
      "height": 1268
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32,
   "hfov": 27.41
  }
 ],
 "id": "overlay_13835188_3B56_4B15_41BD_C4E50A75468D",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3, this.camera_7A942372_3BCA_4FF4_41AC_D81C009FD765); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.74,
   "hfov": 6.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_13_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.7
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1C90121E_3B49_C92D_41C8_03453E1F0E85",
   "pitch": -10.7,
   "yaw": 0.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.35,
   "distance": 100
  }
 ],
 "id": "overlay_1FCEFEB1_3B5A_F977_41C3_B04652201E80",
 "data": {
  "label": "Artzone HS"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.94,
   "hfov": 15.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_14_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.31
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_14_0.png",
      "class": "ImageResourceLevel",
      "width": 479,
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.31,
   "yaw": 0.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.44,
   "distance": 50
  }
 ],
 "id": "overlay_1C4E9748_3B5B_F715_41B5_B99768F59920",
 "data": {
  "label": "ART  ZONE"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -46.93,
   "hfov": 28.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_15_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 137,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.02
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46.93,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_15_0.png",
      "class": "ImageResourceLevel",
      "width": 898,
      "height": 1304
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.02,
   "hfov": 28.46
  }
 ],
 "id": "overlay_1EB0A9A3_3B5E_7B14_41CA_684EE8CF2531",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802, this.camera_7A9EB36A_3BCA_4F14_419C_AC24A079986C); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -43.43,
   "hfov": 6.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_16_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.02
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1C97721E_3B49_C92D_41B6_AE431F5A3DC2",
   "pitch": -3.02,
   "yaw": -43.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.46,
   "distance": 100
  }
 ],
 "id": "overlay_1F566430_3B5E_4975_41C3_379791BF832D",
 "data": {
  "label": "BOOK NOOK"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.59,
   "hfov": 14.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_17_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 58,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_17_0.png",
      "class": "ImageResourceLevel",
      "width": 434,
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.31,
   "yaw": -88.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.07,
   "distance": 50
  }
 ],
 "id": "overlay_17B765EF_3B59_CAEC_4188_1136BDC48C68",
 "data": {
  "label": "Scribble Area"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -42.44,
   "hfov": 12.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_18_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 50,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.69
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_18_0.png",
      "class": "ImageResourceLevel",
      "width": 378,
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.69,
   "yaw": -42.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.26,
   "distance": 50
  }
 ],
 "id": "overlay_15018261_3B5A_4914_41A2_46A8BF996C74",
 "data": {
  "label": "Book Nook"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 48.14,
   "hfov": 14.94,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_19_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 80,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.13
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 48.14,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_19_0.png",
      "class": "ImageResourceLevel",
      "width": 464,
      "height": 1150
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.13,
   "hfov": 14.94
  }
 ],
 "id": "overlay_16015D08_3B59_DB15_41C1_CFBFA2DE7100",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.36,
   "hfov": 8.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_20_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_20_0.png",
      "class": "ImageResourceLevel",
      "width": 273,
      "height": 117
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.65,
   "yaw": 47.36,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.84,
   "distance": 50
  }
 ],
 "id": "overlay_10CD1F90_3B56_B735_41CA_2756A5DEF98F",
 "data": {
  "label": "Storage"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40, this.camera_7ABDB381_3BCA_4F14_41B3_949AFE64AC48); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 45.75,
   "hfov": 6.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_21_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.68
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1C96621F_3B49_C92B_41A3_3262466BE25E",
   "pitch": -5.68,
   "yaw": 45.75,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.43,
   "distance": 100
  }
 ],
 "id": "overlay_109717BE_3B57_B76D_41CD_016D2FDE1BE0",
 "data": {
  "label": "Circle Arrow 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -176.95,
   "hfov": 15.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_24_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_24_0.png",
      "class": "ImageResourceLevel",
      "width": 478,
      "height": 155
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.2,
   "yaw": -176.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.46,
   "distance": 50
  }
 ],
 "id": "overlay_13386816_3B4F_D93C_41B3_E3807DE16D59",
 "data": {
  "label": "Story Area"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 112.51,
   "hfov": 9.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.3
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1F2DDAA0_3AF6_7915_4177_EAA98C040528",
   "pitch": -10.3,
   "yaw": 112.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.54,
   "distance": 100
  }
 ],
 "id": "overlay_1F954BAD_3976_7F6F_41CB_8A783A5550D2",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_7ACFE39F_3BCA_4F2B_41CB_63D2A758641B); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 173.72,
   "hfov": 6.62,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 173.72,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.58,
   "hfov": 6.62
  }
 ],
 "id": "overlay_19ECD474_3976_49FD_41BA_BFA5D09A1160",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.68,
   "hfov": 35.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_3_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 195,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.84
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 63.68,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 1127,
      "height": 1151
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.84,
   "hfov": 35.3
  }
 ],
 "id": "overlay_1D2D3AEE_397E_5EED_41AF_214622735F80",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 106.27,
   "hfov": 9.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 98,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 106.27,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 300,
      "height": 612
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.58,
   "hfov": 9.71
  }
 ],
 "id": "overlay_2783F5FD_397E_4AEF_4183_CD1F399828E4",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -96.46,
   "hfov": 43.64,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 74,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -96.46,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 762,
      "height": 2047
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "hfov": 43.64
  }
 ],
 "id": "overlay_151C54EF_3B56_4AEB_41BF_1044DD99439E",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 105.79,
   "hfov": 13.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 49,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.51
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 409,
      "height": 133
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.51,
   "yaw": 105.79,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.11,
   "distance": 50
  }
 ],
 "id": "overlay_14AF353D_3B56_4B6C_41C5_0C3D37560C92",
 "data": {
  "label": "Play  Zone"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3, this.camera_7AC4F3A7_3BCA_4F1C_41A3_4BC7A161EA34); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.55,
   "hfov": 9.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.8
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0125AB42_3BBA_5F15_41CC_82161707CE45",
   "pitch": -10.8,
   "yaw": -106.55,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.53,
   "distance": 100
  }
 ],
 "id": "overlay_08CE611B_3B49_CB2B_41CA_EA09FFFEDFA2",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -105.16,
   "hfov": 13.16,
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_8_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 37,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.57
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 410,
      "height": 177
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.57,
   "yaw": -105.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.16,
   "distance": 50
  }
 ],
 "id": "overlay_0FCE7611_3B4A_C937_41AF_E6CEAD0B7252",
 "data": {
  "label": "ART  Zone"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_tcap0",
 "distance": 50
},
{
 "useHandCursor": true,
 "class": "AreaHotspotMapOverlay",
 "image": {
  "class": "HotspotMapOverlayImage",
  "y": 707.73,
  "x": 699.28,
  "width": 86.56,
  "image": {
   "levels": [
    {
     "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_HS_0.png",
     "class": "ImageResourceLevel",
     "width": 86,
     "height": 76
    }
   ],
   "class": "ImageResource"
  },
  "height": 76.38
 },
 "map": {
  "width": 86.56,
  "class": "HotspotMapOverlayMap",
  "image": {
   "levels": [
    {
     "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_HS_0_map.gif",
     "class": "ImageResourceLevel",
     "width": 18,
     "height": 16
    }
   ],
   "class": "ImageResource"
  },
  "y": 707.73,
  "x": 699.28,
  "offsetY": 0,
  "height": 76.38,
  "offsetX": 0
 },
 "areas": [
  {
   "class": "HotspotMapOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "id": "overlay_1948E7BC_3959_D76C_41A1_32EFB2D159B9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_7AB21389_3BCA_4F14_41C6_EB191FCF4549); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 171.71,
   "hfov": 5.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.4
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 171.71,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 233,
      "height": 233
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -43.4,
   "hfov": 5.48
  }
 ],
 "id": "overlay_2267F625_395E_491C_41A0_C96742CBCAB9",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40, this.camera_7ADB9398_3BCA_4F34_41A3_FE289B876374); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.04,
   "hfov": 9.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.82
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_1F2B6AA0_3AF6_7915_41CA_ECE11DB2DEB3",
   "pitch": -5.82,
   "yaw": 64.04,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.65,
   "distance": 100
  }
 ],
 "id": "overlay_18AE0940_395E_DB15_41B3_1A48DE91B086",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.33,
   "hfov": 31.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_4_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.83
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.33,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 992,
      "height": 668
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.83,
   "hfov": 31.28
  }
 ],
 "id": "overlay_279787AD_397F_F76C_41BC_567EAAA57095",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 128.75,
   "hfov": 12.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_5_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 153,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 128.75,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 402,
      "height": 525
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.7,
   "hfov": 12.95
  }
 ],
 "id": "overlay_1B4DC94C_397E_BB2D_41C5_257588194E20",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 66.89,
   "hfov": 14.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 448,
      "height": 240
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.88,
   "yaw": 66.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.48,
   "distance": 50
  }
 ],
 "id": "overlay_084F2F96_3B59_B73D_41CA_50ADA5AA0C73",
 "data": {
  "label": "Storage"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -45.74,
   "hfov": 17.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_7_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.33
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_7_0.png",
      "class": "ImageResourceLevel",
      "width": 573,
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 17.33,
   "yaw": -45.74,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 17.69,
   "distance": 50
  }
 ],
 "id": "overlay_0EE0E2B5_3B5A_497F_41BC_1C7707AEF76A",
 "data": {
  "label": "Scribble Area"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.5,
   "hfov": 22.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_8_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 103,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -129.5,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_8_0.png",
      "class": "ImageResourceLevel",
      "width": 696,
      "height": 1342
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "hfov": 22.25
  }
 ],
 "id": "overlay_0E1477E2_3B5B_B715_41C7_F3C198C004C3",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -84.16,
   "hfov": 48.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_9_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 143,
      "height": 200
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.37
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -84.16,
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_9_0.png",
      "class": "ImageResourceLevel",
      "width": 1466,
      "height": 2048
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.37,
   "hfov": 48.5
  }
 ],
 "id": "overlay_0BC3EC2A_3B5A_D915_4191_7A11FBA3BC0A",
 "data": {
  "label": "Polygon"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -126.89,
   "hfov": 18.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_10_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 45,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.01
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_10_0.png",
      "class": "ImageResourceLevel",
      "width": 573,
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.01,
   "yaw": -126.89,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 18.52,
   "distance": 50
  }
 ],
 "id": "overlay_0B4702F6_3B5A_4EFD_41C8_BDD1993E064D",
 "data": {
  "label": "Scribble Area"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -128.65,
   "hfov": 9.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_11_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.05
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0127BB42_3BBA_5F15_41C0_6B7408177789",
   "pitch": -2.05,
   "yaw": -128.65,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.69,
   "distance": 100
  }
 ],
 "id": "overlay_097B83BD_3B5A_4F6F_41CA_749E3D2C88F8",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802, this.camera_7AA78390_3BCA_4F35_4185_D3710AA128DA); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -74.39,
   "hfov": 9.7,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_12_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.22
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_0127FB42_3BBA_5F15_41C0_BAA7167AF760",
   "pitch": 1.22,
   "yaw": -74.39,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.7,
   "distance": 100
  }
 ],
 "id": "overlay_0AE2BEFB_3B59_D6F4_41B4_00928A6C4D0B",
 "data": {
  "label": "Circle Point 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -73.88,
   "hfov": 15.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_13_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 38,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.02
  }
 ],
 "items": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_13_0.png",
      "class": "ImageResourceLevel",
      "width": 479,
      "height": 201
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.02,
   "yaw": -73.88,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.45,
   "distance": 50
  }
 ],
 "id": "overlay_10C4625D_3B56_492F_41BA_C90EE3656BBB",
 "data": {
  "label": "Book nook"
 }
},
{
 "inertia": false,
 "class": "TripodCapPanoramaOverlay",
 "hfov": 34.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "class": "ImageResourceLevel",
    "width": 850,
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": true,
 "id": "panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_tcap0",
 "distance": 50
},
{
 "horizontalAlign": "center",
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "top": "0%",
 "propagateClick": true,
 "overflow": "visible",
 "height": 110,
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "button menu sup"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "overflow": "scroll",
 "height": "85.959%",
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set"
 },
 "visible": false,
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "maxHeight": 1080,
 "maxWidth": 1080,
 "id": "Image_222C05C8_394B_CB14_418C_C97785513D96",
 "left": "0%",
 "width": "15.881%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_222C05C8_394B_CB14_418C_C97785513D96.png",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "height": "72.932%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "Image39868"
 }
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "38%",
 "width": 386,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": "0%",
 "height": 51,
 "minWidth": 1,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "-button set container"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowSpread": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowSpread": 1,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowSpread": 1,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "15%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "vertical",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "shadowBlurRadius": 25,
 "shadowVerticalLength": 0,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowSpread": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "shadowColor": "#000000",
 "paddingRight": 0,
 "right": "10%",
 "shadowHorizontalLength": 0,
 "paddingLeft": 0,
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "minHeight": 1,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "layout": "horizontal",
 "data": {
  "name": "Global"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 20,
 "right": "10%",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "overflow": "visible",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "vertical",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container X global"
 },
 "scrollBarOpacity": 0.5
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_271362F8_39DA_4EF5_4191_B8B1372B49BD",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_011D8B3B_3BBA_5F6B_41B8_F11CCF013848",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_011DCB3B_3BBA_5F6B_41C7_005A74AC29A8",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_26F1373F_395A_576C_41CC_971B472C218D",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_012B7B43_3BBA_5F1B_41C4_DDCF9F8B1954",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_10_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_0122BB3C_3BBA_5F6D_41B3_9709099EAE8E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_13_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_01211B3C_3BBA_5F6D_41C9_4A82BF50D018",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_271482F8_39DA_4EF5_41AF_6724EE02B625",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_271402F8_39DA_4EF5_41C0_B79824B92D3C",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_7C3D0C29_3BCF_F917_417A_9F0701B3B5FA",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_8_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_23AAC23C_39CE_496D_41BA_51E2FD83B237",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_9_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1F271A9E_3AF6_792D_41C5_3B209ECB8A49",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_13_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1C90121E_3B49_C92D_41C8_03453E1F0E85",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_16_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1C97721E_3B49_C92D_41B6_AE431F5A3DC2",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_21_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ],
 "id": "AnimatedImageResource_1C96621F_3B49_C92B_41A3_3262466BE25E",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_1F2DDAA0_3AF6_7915_4177_EAA98C040528",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_0125AB42_3BBA_5F15_41CC_82161707CE45",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_1F2B6AA0_3AF6_7915_41CA_ECE11DB2DEB3",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_11_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_0127BB42_3BBA_5F15_41C0_6B7408177789",
 "frameCount": 24
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_12_0.png",
   "class": "ImageResourceLevel",
   "width": 1200,
   "height": 1800
  }
 ],
 "id": "AnimatedImageResource_0127FB42_3BBA_5F15_41C0_BAA7167AF760",
 "frameCount": 24
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 60,
 "minWidth": 1,
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareTwitter(window.location.href)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "shadow": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "height": 58,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.shareFacebook(window.location.href)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "cursor": "hand"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 130,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 4,
 "paddingBottom": 0,
 "label": "PANORAMA LIST",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button panorama list"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 103,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "FLOORPLAN",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button floorplan"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 0.8,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 112,
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "shadowBlurRadius": 15,
 "backgroundOpacity": 0,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "iconBeforeLabel": true,
 "height": 40,
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontSize": 12,
 "pressedBackgroundOpacity": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "label": "PHOTOALBUM",
 "paddingTop": 0,
 "gap": 5,
 "fontStyle": "normal",
 "class": "Button",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "iconWidth": 32,
 "backgroundColorDirection": "vertical",
 "data": {
  "name": "Button photoalbum"
 },
 "fontWeight": "bold",
 "textDecoration": "none",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemLabelFontColor": "#04A3E1",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "width": "100%",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "backgroundOpacity": 0.05,
 "itemMinHeight": 50,
 "scrollBarMargin": 2,
 "verticalAlign": "middle",
 "paddingLeft": 70,
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemOpacity": 1,
 "itemPaddingTop": 3,
 "itemMinWidth": 50,
 "height": "100%",
 "itemBackgroundColor": [],
 "borderSize": 0,
 "itemBackgroundColorRatios": [],
 "minWidth": 1,
 "itemPaddingRight": 3,
 "class": "ThumbnailGrid",
 "itemThumbnailOpacity": 1,
 "backgroundColorDirection": "vertical",
 "itemHeight": 156,
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "scrollBarColor": "#04A3E1",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemLabelFontWeight": "normal",
 "scrollBarOpacity": 0.5,
 "rollOverItemThumbnailShadow": true,
 "scrollBarVisible": "rollOver",
 "itemThumbnailHeight": 125,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "paddingRight": 70,
 "itemThumbnailShadow": false,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "borderRadius": 5,
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemLabelGap": 7,
 "backgroundColorRatios": [
  0
 ],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemBackgroundColorDirection": "vertical",
 "selectedItemThumbnailShadow": true,
 "itemThumbnailWidth": 220,
 "itemMaxWidth": 1000,
 "gap": 26,
 "paddingBottom": 70,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemHorizontalAlign": "center",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "itemWidth": 220,
 "itemMode": "normal",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "horizontalAlign": "center",
 "itemThumbnailBorderRadius": 0
},
{
 "horizontalAlign": "center",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 50,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 400,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 140,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "header"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "Container photo"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "-left"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 1,
 "scrollBarMargin": 2,
 "paddingRight": 60,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 460,
 "height": "100%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "-right"
 },
 "scrollBarColor": "#0069A3",
 "scrollBarOpacity": 0.51
},
{
 "horizontalAlign": "center",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "propagateClick": false,
 "height": "75%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "shadow": false,
 "data": {
  "name": "Image"
 }
},
{
 "horizontalAlign": "right",
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "transitionDuration": 500,
 "minHeight": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": 0,
 "playbackBarLeft": 0,
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "horizontal",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container arrows"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "cursor": "hand"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "insetBorder": false,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "backgroundColor": [
  "#FFFFFF"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "WebFrame",
 "scrollEnabled": true,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "horizontalAlign": "right",
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "cursor": "hand"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 80,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.18vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.18vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText54192"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "36.14%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "cursor": "hand"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarProgressOpacity": 1,
 "transitionDuration": 500,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "borderSize": 0,
 "height": "100%",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#FF9933",
 "toolTipFontColor": "#FFFFFF",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "class": "ViewerArea",
 "progressBottom": 2,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "displayTooltipInTouchScreens": true,
 "paddingRight": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "paddingTop": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipShadowColor": "#333333",
 "playbackBarHeight": 10,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical"
},
{
 "horizontalAlign": "right",
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "paddingRight": 0,
 "right": 20,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "top": 20,
 "propagateClick": false,
 "height": "10%",
 "minWidth": 50,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "class": "IconButton",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "verticalAlign": "bottom",
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "shadow": false,
 "data": {
  "name": "Image"
 }
},
{
 "horizontalAlign": "right",
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "height": 60,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 20,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 100,
 "height": "100%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 30,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "vertical",
 "data": {
  "name": "Container text"
 },
 "scrollBarColor": "#E73B2C",
 "scrollBarOpacity": 0.79
},
{
 "horizontalAlign": "left",
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": 40,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "Container space"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.64vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "horizontalAlign": "left",
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "30%",
 "minWidth": 1,
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "shadow": false,
 "layout": "absolute",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container separator"
 },
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#04A3E1"
 ],
 "borderColor": "#000000",
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "iconBeforeLabel": true,
 "height": "9%",
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "layout": "horizontal",
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 20,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText"
 },
 "scrollBarOpacity": 0.5
},
{
 "fontFamily": "Bebas Neue Bold",
 "horizontalAlign": "center",
 "rollOverBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "shadowBlurRadius": 6,
 "backgroundOpacity": 0.7,
 "iconHeight": 32,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#04A3E1"
 ],
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 59,
 "fontSize": 34,
 "label": "lorem ipsum",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 5,
 "paddingTop": 0,
 "fontStyle": "normal",
 "class": "Button",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "iconWidth": 32,
 "data": {
  "name": "Button"
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "layout": "horizontal",
 "visible": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "45%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.06vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText18899"
 },
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0.3,
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "minWidth": 1,
 "height": "80%",
 "gap": 10,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "layout": "horizontal",
 "data": {
  "name": "- content"
 },
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "backgroundOpacity": 0,
 "verticalAlign": "top",
 "paddingRight": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "shadow": false,
 "data": {
  "name": "agent photo"
 },
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "scrollBarVisible": "rollOver",
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingBottom": 10,
 "paddingTop": 0,
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.98vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.87vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.87vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.1vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.99vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.1vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "shadow": false,
 "scrollBarColor": "#04A3E1",
 "data": {
  "name": "HTMLText19460"
 },
 "scrollBarOpacity": 0.5
}],
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "height": "100%",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderSize": 0,
 "paddingBottom": 0,
 "gap": 10,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "existsKey": function(key){  return key in window; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getKey": function(key){  return window[key]; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "unregisterKey": function(key){  delete window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "mouseWheelEnabled": true,
 "shadow": false,
 "layout": "absolute",
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
