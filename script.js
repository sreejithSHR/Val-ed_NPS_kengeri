(function(){
    var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "start": "this.playAudioList([this.audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_5B4F719A_43BF_81C9_417E_828E2029B341.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
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
  "this.Image_222C05C8_394B_CB14_418C_C97785513D96",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderRadius": 0,
 "minHeight": 20,
 "definitions": [{
 "initialPosition": {
  "yaw": -31.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AD541EB_43BF_814F_41BF_110B8BC496D5"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE_0_1.png",
    "width": 819,
    "height": 1024,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 104.13,
 "hfov": 1.91,
 "pitch": -16.75,
 "showDuration": 500
},
{
 "initialPosition": {
  "hfov": 125,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_camera"
},
{
 "height": 1280,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.58.23 PM (1)",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11_t.jpg",
 "width": 960,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 178.95,
  "class": "PanoramaCameraPosition",
  "pitch": -10.52
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_camera"
},
{
 "height": 1280,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.58.20 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1_t.jpg",
 "width": 960,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 134.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A4DB220_43BF_82F9_41D0_270B15CA2363"
},
{
 "initialPosition": {
  "hfov": 126,
  "yaw": 2.51,
  "pitch": -4.07,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 2.51,
  "stereographicFactor": 0.18,
  "pitch": -90,
  "class": "RotationalCameraDisplayPosition"
 },
 "displayMovements": [
  {
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement",
   "duration": 1000
  },
  {
   "targetPitch": -4.07,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 126,
   "duration": 3000
  }
 ],
 "id": "panorama_360612BC_397A_496D_41A0_E97535E7DA58_camera"
},
{
 "height": 960,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.58.17 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "levels": [
  {
   "url": "media/popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE_0_0.png",
   "width": 1080,
   "height": 1350,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE_0_1.png",
   "width": 819,
   "height": 1024,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE_0_2.png",
   "width": 409,
   "height": 512,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5B51A1A0_43BF_81F9_41C7_77D18037CAAA",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_512F5E9F_43B3_83C7_419B_932049EE1981",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_512F5E9F_43B3_83C7_419B_932049EE1981_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 4.26,
 "hfov": 5.47,
 "pitch": 31.46,
 "showDuration": 500
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_513B56F9_43B4_834A_41A7_F1EDA01958BC",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_513B56F9_43B4_834A_41A7_F1EDA01958BC_0_1.png",
    "width": 819,
    "height": 1024,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 3.76,
 "hfov": 4.32,
 "pitch": -0.69,
 "showDuration": 500
},
{
 "touchControlMode": "drag_rotation",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "mouseControlMode": "drag_acceleration"
},
{
 "fieldOfViewOverlayOutsideColor": "#000000",
 "label": "WhatsApp Image 2025-10-27 at 2.28.11 PM",
 "id": "map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
 "minimumZoomFactor": 0.5,
 "thumbnailUrl": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_t.jpg",
 "width": 1600,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D.jpeg",
    "width": 1600,
    "height": 1497,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_lq.jpeg",
    "width": 264,
    "tags": "preload",
    "height": 248,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "overlays": [
  "this.overlay_1948E7BC_3959_D76C_41A1_32EFB2D159B9"
 ],
 "fieldOfViewOverlayOutsideOpacity": 0,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "class": "Map",
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "height": 1497
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A2341F2_43BF_8159_41B7_8E27B7DBAAC6"
},
{
 "audio": {
  "mp3Url": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1.ogg"
 },
 "autoplay": true,
 "class": "MediaAudio",
 "id": "audio_7C78285D_3BCA_792F_41BD_4CC248FD0BB1",
 "data": {
  "label": "Hope (mp3cut.net)"
 }
},
{
 "initialPosition": {
  "yaw": 2.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AA531AE_43BF_81C9_41B0_29BE0ADF5633"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -45.91,
   "yaw": -121.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "backwardYaw": 79.6,
   "yaw": -50.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776"
  },
  {
   "backwardYaw": -74.39,
   "yaw": 79.2,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3"
  }
 ],
 "label": "Emotion tree",
 "id": "panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
 "thumbnailUrl": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_t.jpg",
 "overlays": [
  "this.overlay_21A4D55E_39CE_4B2D_41A6_DAF8DA2AA4F7",
  "this.overlay_21B6A181_39CA_4B14_418D_EFA91818C905",
  "this.overlay_2516E40B_39CA_C92B_41C2_76F87D78D14C",
  "this.overlay_23BF57EC_39DA_56ED_41C9_18C8B3F679A3",
  "this.overlay_1C7C0EB0_397A_5975_41C5_18213A1541AD",
  "this.overlay_116CE079_3979_C9F4_41C1_6A995A143999",
  "this.overlay_0B5DE8DE_3B57_D92D_41B2_E4520D7D79A5",
  "this.overlay_14B2EAF9_3B59_FEF4_41B4_2B4FEC5EAEC0",
  "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802_tcap0",
  "this.overlay_522ADE47_43B4_8347_41B1_C4861CE0E14E",
  "this.popup_513B56F9_43B4_834A_41A7_F1EDA01958BC",
  "this.popup_512F5E9F_43B3_83C7_419B_932049EE1981"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_t.jpg"
  }
 ]
},
{
 "levels": [
  {
   "url": "media/popup_512F5E9F_43B3_83C7_419B_932049EE1981_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_512F5E9F_43B3_83C7_419B_932049EE1981_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_512F5E9F_43B3_83C7_419B_932049EE1981_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5B5391A1_43BF_81FB_41A9_6373487A5225",
 "class": "ImageResource"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_5B4F019A_43BF_81C9_41D0_D493D724023C",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 126,
  "yaw": 2.51,
  "pitch": -4.07,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AB1B1B6_43BF_81D9_41C7_12A738B7D44E"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -88.8,
   "yaw": 175.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "backwardYaw": -88.8,
   "yaw": 175.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783"
  },
  {
   "backwardYaw": -50.86,
   "yaw": 79.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802"
  }
 ],
 "label": "Scribble Wall",
 "id": "panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
 "thumbnailUrl": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_t.jpg",
 "overlays": [
  "this.overlay_1B6BA114_394E_CB3D_41B0_0A60CB212A0A",
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
  "this.overlay_56209463_42C2_BF0C_41CC_AAB59A3BF590",
  "this.overlay_5676D196_42C2_D937_41AB_F8EDCA490139",
  "this.popup_519ECE47_43BC_8347_41A2_0526555D929F"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_t.jpg"
  }
 ]
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_5B4F719A_43BF_81C9_417E_828E2029B341",
 "class": "PlayList"
},
{
 "hfovMax": 134,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783"
  }
 ],
 "label": "PlayZone",
 "id": "panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
 "thumbnailUrl": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_t.jpg",
 "overlays": [
  "this.overlay_1F46BF38_3976_5774_418C_6BF2011262DE",
  "this.overlay_1D1F187B_3976_B9EB_41C7_9E22A507C391",
  "this.overlay_102A7CE5_3949_D91F_41C6_EB735EA64528",
  "this.overlay_13AF537F_394A_4FEB_41C4_643D884A6B80",
  "this.overlay_15BB0D2C_3B4F_BB6C_41C6_84D47416F535",
  "this.overlay_09C0CB01_3B4E_7F14_41CC_87360621593C",
  "this.overlay_0C038C08_3B4E_7915_41C4_804107972E0D",
  "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_tcap0",
  "this.overlay_56A4523C_42C2_7B7B_41C6_1A2E04CAB525",
  "this.popup_51B6F806_43BC_8EB9_41BC_D1858B43655C"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_t.jpg"
  }
 ]
},
{
 "hfovMax": 131,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.78,
   "yaw": 174.22,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776"
  },
  {
   "backwardYaw": -106.55,
   "yaw": 93.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40"
  },
  {
   "backwardYaw": 79.2,
   "yaw": -74.39,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802"
  }
 ],
 "label": "Art Zone",
 "id": "panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
 "thumbnailUrl": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_t.jpg",
 "overlays": [
  "this.overlay_2267F625_395E_491C_41A0_C96742CBCAB9",
  "this.overlay_279787AD_397F_F76C_41BC_567EAAA57095",
  "this.overlay_1B4DC94C_397E_BB2D_41C5_257588194E20",
  "this.overlay_084F2F96_3B59_B73D_41CA_50ADA5AA0C73",
  "this.overlay_0E1477E2_3B5B_B715_41C7_F3C198C004C3",
  "this.overlay_0BC3EC2A_3B5A_D915_4191_7A11FBA3BC0A",
  "this.overlay_0B4702F6_3B5A_4EFD_41C8_BDD1993E064D",
  "this.overlay_097B83BD_3B5A_4F6F_41CA_749E3D2C88F8",
  "this.overlay_0AE2BEFB_3B59_D6F4_41B4_00928A6C4D0B",
  "this.overlay_10C4625D_3B56_492F_41BA_C90EE3656BBB",
  "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_tcap0",
  "this.overlay_2EFB3700_3F7C_57C9_41C7_3F95737670D1"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_t.jpg"
  }
 ]
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_519ECE47_43BC_8347_41A2_0526555D929F",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_519ECE47_43BC_8347_41A2_0526555D929F_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 11.43,
 "hfov": 7.5,
 "pitch": -5.97,
 "showDuration": 500
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908_0_1.png",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -42.62,
 "hfov": 3.78,
 "pitch": 22.73,
 "showDuration": 500
},
{
 "fontColor": "#FFFFFF",
 "fontFamily": "Arial",
 "selectedBackgroundColor": "#202020",
 "class": "Menu",
 "children": [
  {
   "label": "Enterance",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "MenuItem"
  },
  {
   "label": "Classroom",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "MenuItem"
  },
  {
   "label": "Emotion tree",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "MenuItem"
  },
  {
   "label": "Scribble Wall",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "MenuItem"
  },
  {
   "label": "Art Zone",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "MenuItem"
  },
  {
   "label": "Storage",
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "MenuItem"
  },
  {
   "label": "PlayZone",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "MenuItem"
  },
  {
   "label": "Story Area",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "MenuItem"
  }
 ],
 "label": "Media",
 "id": "Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "rollOverBackgroundColor": "#000000",
 "rollOverOpacity": 0.8,
 "rollOverFontColor": "#FFFFFF",
 "backgroundColor": "#404040",
 "opacity": 0.4,
 "selectedFontColor": "#FFFFFF"
},
{
 "levels": [
  {
   "url": "media/popup_518513E9_43B3_814A_41CD_181FC6D0290E_0_0.jpg",
   "width": 3840,
   "height": 2160,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_518513E9_43B3_814A_41CD_181FC6D0290E_0_1.jpg",
   "width": 2048,
   "height": 1152,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_518513E9_43B3_814A_41CD_181FC6D0290E_0_2.jpg",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_518513E9_43B3_814A_41CD_181FC6D0290E_0_3.jpg",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5B5091A0_43BF_81F9_41CA_E52562233A92",
 "class": "ImageResource"
},
{
 "levels": [
  {
   "url": "media/popup_513B56F9_43B4_834A_41A7_F1EDA01958BC_0_0.png",
   "width": 1080,
   "height": 1350,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_513B56F9_43B4_834A_41A7_F1EDA01958BC_0_1.png",
   "width": 819,
   "height": 1024,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_513B56F9_43B4_834A_41A7_F1EDA01958BC_0_2.png",
   "width": 409,
   "height": 512,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5B5201A1_43BF_81FB_41BD_0338E5719B5E",
 "class": "ImageResource"
},
{
 "height": 1280,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.57.59 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8_t.jpg",
 "width": 960,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "class": "PhotoAlbumPlayer"
},
{
 "items": [
  {
   "media": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58_camera"
  },
  {
   "media": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_camera"
  },
  {
   "media": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802_camera"
  },
  {
   "media": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_camera"
  },
  {
   "media": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_camera"
  },
  {
   "media": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_camera"
  },
  {
   "media": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_camera"
  },
  {
   "media": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783_camera"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 127,
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_camera"
},
{
 "height": 1280,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.58.19 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3_t.jpg",
 "width": 960,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_51B6F806_43BC_8EB9_41BC_D1858B43655C",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_51B6F806_43BC_8EB9_41BC_D1858B43655C_0_1.png",
    "width": 819,
    "height": 1024,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": -34.54,
 "hfov": 5.77,
 "pitch": -16.77,
 "showDuration": 500
},
{
 "class": "PhotoAlbum",
 "label": "Photo Album Yellow and Blue Modern Cleaning Services Poster",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_t.png",
 "playList": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_AlbumPlayList"
},
{
 "initialPosition": {
  "hfov": 124,
  "yaw": -100.4,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A5BB227_43BF_82C7_41BF_A769421E42B7"
},
{
 "hfovMin": "118%",
 "hfovMax": 131,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783"
  }
 ],
 "label": "Enterance",
 "id": "panorama_360612BC_397A_496D_41A0_E97535E7DA58",
 "thumbnailUrl": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_t.jpg",
 "overlays": [
  "this.overlay_298A7556_395E_CB3C_41AA_71525C995BDD",
  "this.overlay_2BEEBFC2_39DB_B715_4198_F24A47E417F6",
  "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0",
  "this.overlay_4E87D248_40E4_8013_41CB_08833EC8AA1E",
  "this.overlay_4E529511_40E4_8030_41C7_B3BF3DF4A744"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_t.jpg"
  }
 ],
 "hfov": 360,
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29"
},
{
 "height": 960,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.57.55 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "height": 960,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.58.29 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "levels": [
  {
   "url": "media/popup_51B6F806_43BC_8EB9_41BC_D1858B43655C_0_0.png",
   "width": 1080,
   "height": 1350,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_51B6F806_43BC_8EB9_41BC_D1858B43655C_0_1.png",
   "width": 819,
   "height": 1024,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_51B6F806_43BC_8EB9_41BC_D1858B43655C_0_2.png",
   "width": 409,
   "height": 512,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5AA9D1A3_43BF_81FF_41C9_1C59B8DC51E3",
 "class": "ImageResource"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_518513E9_43B3_814A_41CD_181FC6D0290E",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_518513E9_43B3_814A_41CD_181FC6D0290E_0_2.jpg",
    "width": 1024,
    "height": 576,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 133.67,
 "hfov": 2.7,
 "pitch": -20.63,
 "showDuration": 500
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_3607391A_394E_5B35_41C2_04B1EF66E802_camera"
},
{
 "initialPosition": {
  "yaw": 91.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A8DE1BD_43BF_81CB_41C1_AD78FB77F51A"
},
{
 "height": 960,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 6.02.30 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": 179.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A1E4209_43BF_82CB_41C1_51761FA5CF2E"
},
{
 "initialPosition": {
  "hfov": 125,
  "yaw": -86.04,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AF681DC_43BF_8149_4191_709ED72E70CA"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_36CD60BE_3956_496D_41AF_F08047728783_camera"
},
{
 "initialPosition": {
  "yaw": -134.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AF9D1D4_43BF_8159_41B2_0C04D73E9EB2"
},
{
 "items": [
  {
   "begin": "this.loopAlbum(this.playList_5B4A4199_43BF_81CB_41AF_8771338B4265, 0)",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB",
   "player": "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFCPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_5B4A4199_43BF_81CB_41AF_8771338B4265",
 "class": "PlayList"
},
{
 "levels": [
  {
   "url": "media/popup_519ECE47_43BC_8347_41A2_0526555D929F_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_519ECE47_43BC_8347_41A2_0526555D929F_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_519ECE47_43BC_8347_41A2_0526555D929F_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5B5461A2_43BF_81F9_41C0_213D211698AF",
 "class": "ImageResource"
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "initialPosition": {
  "yaw": 91.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A9AF1C5_43BF_81BB_41C3_1B486C17B80E"
},
{
 "initialPosition": {
  "yaw": 129.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AE901CD_43BF_814B_4197_A39F6692F6FB"
},
{
 "items": [
  {
   "media": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58_camera"
  },
  {
   "media": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_camera"
  },
  {
   "media": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802_camera"
  },
  {
   "media": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_camera"
  },
  {
   "media": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_camera"
  },
  {
   "media": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_camera"
  },
  {
   "media": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_camera"
  },
  {
   "media": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 0)",
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "hfov": 124,
  "yaw": -4.89,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5AC471E3_43BF_817F_41C3_7014C34114CF"
},
{
 "rotationY": 0,
 "rotationX": 0,
 "hideEasing": "cubic_out",
 "rotationZ": 0,
 "class": "PopupPanoramaOverlay",
 "popupDistance": 100,
 "id": "popup_507CCF50_43B5_8159_41B0_37F6BF0E333F",
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_507CCF50_43B5_8159_41B0_37F6BF0E333F_0_0.png",
    "width": 940,
    "height": 788,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/popup_507CCF50_43B5_8159_41B0_37F6BF0E333F_0_1.png",
    "width": 512,
    "height": 429,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "hideDuration": 500,
 "showEasing": "cubic_in",
 "yaw": 64.44,
 "hfov": 2.81,
 "pitch": -12.72,
 "showDuration": 500
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_camera"
},
{
 "height": 960,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.58.00 PM",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6_t.jpg",
 "width": 1280,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 45.75,
   "yaw": 148.85,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "backwardYaw": 93.96,
   "yaw": -106.55,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85"
  }
 ],
 "label": "Storage",
 "id": "panorama_36CADA49_3956_7914_41BC_C4A69BE34B40",
 "thumbnailUrl": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_t.jpg",
 "overlays": [
  "this.overlay_1F954BAD_3976_7F6F_41CB_8A783A5550D2",
  "this.overlay_19ECD474_3976_49FD_41BA_BFA5D09A1160",
  "this.overlay_1D2D3AEE_397E_5EED_41AF_214622735F80",
  "this.overlay_2783F5FD_397E_4AEF_4183_CD1F399828E4",
  "this.overlay_151C54EF_3B56_4AEB_41BF_1044DD99439E",
  "this.overlay_14AF353D_3B56_4B6C_41C5_0C3D37560C92",
  "this.overlay_08CE611B_3B49_CB2B_41CA_EA09FFFEDFA2",
  "this.overlay_0FCE7611_3B4A_C937_41AF_E6CEAD0B7252",
  "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_tcap0",
  "this.overlay_56B6B794_42C1_D934_41CF_789D6ADF2C08"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_t.jpg"
  }
 ]
},
{
 "initialPosition": {
  "yaw": 73.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A6F2211_43BF_82DB_41BD_800612E49EA5"
},
{
 "initialPosition": {
  "hfov": 125,
  "yaw": -5.78,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A33E1FA_43BF_8149_41CD_55F3A0EA3A2F"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58"
  },
  {
   "backwardYaw": 175.11,
   "yaw": -88.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776"
  },
  {
   "backwardYaw": 148.85,
   "yaw": 45.75,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40"
  },
  {
   "backwardYaw": -180,
   "yaw": -177.62,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_36CD60BE_3956_496D_41AF_F08047728783"
  },
  {
   "backwardYaw": 174.22,
   "yaw": -0.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3"
  },
  {
   "backwardYaw": -121.23,
   "yaw": -45.91,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802"
  }
 ],
 "label": "Classroom",
 "id": "panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A",
 "thumbnailUrl": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_t.jpg",
 "overlays": [
  "this.overlay_2391302F_39F9_C96C_41C3_B5938B6C07E6",
  "this.overlay_2F8A81FA_39FE_4AF4_41C7_2B221241773D",
  "this.overlay_2FD0A535_39FF_CB7F_41BA_9FB8CEF087CC",
  "this.overlay_19B1DDDB_39C9_BB34_41AD_B2ED2D99542C",
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
  "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_tcap0",
  "this.overlay_51A7EC16_42CE_EF35_41B8_3334DE2DA1E5",
  "this.overlay_56CF589E_42C1_F734_41AE_455045C51AE6",
  "this.overlay_57E556FC_42C2_58F4_41AC_93D9D87CEF0C",
  "this.overlay_517F23A1_439C_81FB_41C2_D76779D93BF3",
  "this.popup_518513E9_43B3_814A_41CD_181FC6D0290E",
  "this.popup_507CCF50_43B5_8159_41B0_37F6BF0E333F",
  "this.popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908",
  "this.popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_t.jpg"
  }
 ]
},
{
 "initialPosition": {
  "hfov": 124,
  "yaw": 8.86,
  "pitch": -2.46,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_camera"
},
{
 "height": 1280,
 "duration": 5000,
 "label": "WhatsApp Image 2025-10-27 at 5.57.59 PM (1)",
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5",
 "class": "Photo",
 "thumbnailUrl": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5_t.jpg",
 "width": 960,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5.jpeg",
    "class": "ImageResourceLevel"
   }
  ]
 }
},
{
 "initialPosition": {
  "yaw": -100.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A7D1218_43BF_82C9_41C7_4A4507EABF9F"
},
{
 "initialPosition": {
  "hfov": 125,
  "yaw": 105.61,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_59A8022F_43BF_82C7_41C0_4369A1616295"
},
{
 "viewerArea": "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFCPhotoAlbumPlayer",
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ],
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "class": "PhotoAlbumPlayer"
},
{
 "initialPosition": {
  "yaw": 58.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 323,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawSpeed": 7.96,
    "yawDelta": 18.5,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 },
 "automaticZoomSpeed": 10,
 "id": "camera_5A01D201_43BF_82BB_41C2_86E9021CEAA5"
},
{
 "levels": [
  {
   "url": "media/popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908_0_0.png",
   "width": 1920,
   "height": 1080,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908_0_1.png",
   "width": 1024,
   "height": 576,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908_0_2.png",
   "width": 512,
   "height": 288,
   "class": "ImageResourceLevel"
  }
 ],
 "id": "ImageResource_5B5D319E_43BF_81C9_41CE_2F4E20B8FC92",
 "class": "ImageResource"
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.62,
   "yaw": -180,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_360612BC_397A_496D_41A0_E97535E7DA58"
  }
 ],
 "label": "Story Area",
 "id": "panorama_36CD60BE_3956_496D_41AF_F08047728783",
 "thumbnailUrl": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_t.jpg",
 "overlays": [
  "this.panorama_36CD60BE_3956_496D_41AF_F08047728783_tcap0",
  "this.overlay_0DB5C4C2_3B49_C914_41C0_81745A3579C6",
  "this.overlay_0D522CEB_3BB6_5AEB_41B3_F01CB8E27A8E",
  "this.overlay_306AF905_3F6C_3BCA_41C1_C2DEFD23ACC2",
  "this.overlay_4FA2C0D5_40E3_800E_41B2_25B6A34D34EA",
  "this.overlay_4DCAA15B_42C2_5936_41B7_CA6DCF75C2E8",
  "this.overlay_531D6B3D_42CE_6970_41B7_25F4037EE8D2",
  "this.overlay_5316675A_42C2_D930_4180_85138822BC8D"
 ],
 "vfov": 180,
 "pitch": 0,
 "partial": false,
 "class": "Panorama",
 "cardboardMenu": "this.Menu_5B59D19D_43BF_81CB_41AB_B0F340473D29",
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "tags": "ondemand",
      "height": 3584,
      "class": "TiledImageResourceLevel",
      "width": 3584,
      "colCount": 7
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "colCount": 4
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2
     },
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_t.jpg"
  }
 ]
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
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#FF9933",
 "progressOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
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
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 641,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 15,
 "propagateClick": true,
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 133,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0.04%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.64,
 "paddingRight": 0,
 "right": "0.06%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 25,
 "backgroundColorRatios": [],
 "propagateClick": true,
 "paddingLeft": 0,
 "backgroundColor": [],
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.22,
 "scrollBarColor": "#000000",
 "height": 59,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--MENU"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--LOCATION"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM + text"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#04A3E1",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "maxHeight": 1080,
 "maxWidth": 1080,
 "id": "Image_222C05C8_394B_CB14_418C_C97785513D96",
 "left": "0%",
 "width": "17.672%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_222C05C8_394B_CB14_418C_C97785513D96.png",
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "14.664%",
 "borderSize": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image39868"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "class": "UIComponent",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "paddingTop": 0,
 "data": {
  "name": "UIComponent10464"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "class": "ZoomImage",
 "scaleMode": "custom",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "ZoomImage10465"
 }
},
{
 "iconWidth": 20,
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "minHeight": 0,
 "borderColor": "#000000",
 "pressedIconColor": "#888888",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "iconColor": "#000000",
 "paddingLeft": 5,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "minWidth": 0,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "fontStyle": "normal",
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "CloseButton",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "visible": false,
 "showEffect": {
  "easing": "cubic_in_out",
  "class": "FadeInEffect",
  "duration": 350
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "paddingTop": 5,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "CloseButton10466"
 },
 "shadowBlurRadius": 6
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 37,
 "maxWidth": 49,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "width": 100,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 137,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "propagateClick": true,
 "bottom": 7,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "map": {
  "width": 86.56,
  "x": 699.28,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_HS_0_map.gif",
     "width": 18,
     "height": 16,
     "class": "ImageResourceLevel"
    }
   ]
  },
  "offsetX": 0,
  "y": 707.73,
  "offsetY": 0,
  "height": 76.38,
  "class": "HotspotMapOverlayMap"
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 699.28,
  "height": 76.38,
  "class": "HotspotMapOverlayImage",
  "y": 707.73,
  "width": 86.56,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_18C25D0C_395A_DB2C_41B6_D5FF13191C1D_HS_0.png",
     "width": 86,
     "height": 76,
     "class": "ImageResourceLevel"
    }
   ]
  }
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "id": "overlay_1948E7BC_3959_D76C_41A1_32EFB2D159B9"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_512F5E9F_43B3_83C7_419B_932049EE1981, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5B5391A1_43BF_81FB_41A9_6373487A5225, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.47,
   "yaw": 4.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 31.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 4.26,
   "hfov": 5.47,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 31.46,
   "image": "this.AnimatedImageResource_5122F4E7_4395_8746_41A0_C214BB8E0822",
   "distance": 100
  }
 ],
 "id": "overlay_21A4D55E_39CE_4B2D_41A6_DAF8DA2AA4F7"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776, this.camera_5A5BB227_43BF_82C7_41BF_A769421E42B7); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": -50.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.45,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -50.86,
   "hfov": 9.69,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.45,
   "image": "this.AnimatedImageResource_512234E8_4395_874A_41CF_8AA34E39794A",
   "distance": 100
  }
 ],
 "id": "overlay_21B6A181_39CA_4B14_418D_EFA91818C905"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3, this.camera_59A8022F_43BF_82C7_41C0_4369A1616295); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.29,
   "yaw": 79.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 79.2,
   "hfov": 9.29,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.6,
   "image": "this.AnimatedImageResource_512254E8_4395_874A_41BE_5DCDC497F4CE",
   "distance": 100
  }
 ],
 "id": "overlay_2516E40B_39CA_C92B_41C2_76F87D78D14C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_5A4DB220_43BF_82F9_41D0_270B15CA2363); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.53,
   "yaw": -121.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -121.23,
   "hfov": 7.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -1.95,
   "image": "this.AnimatedImageResource_512394E8_4395_874A_41B7_35A7FD728253",
   "distance": 100
  }
 ],
 "id": "overlay_23BF57EC_39DA_56ED_41C9_18C8B3F679A3"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.06,
   "yaw": 159.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_5_1_0_map.gif",
      "width": 200,
      "height": 165,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.6,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_5_0.png",
      "width": 691,
      "height": 571,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 22.06,
   "roll": 0,
   "yaw": 159.9,
   "pitch": 2.6
  }
 ],
 "id": "overlay_1C7C0EB0_397A_5975_41C5_18213A1541AD"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.96,
   "yaw": -168.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_6_1_0_map.gif",
      "width": 194,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_6_0.png",
      "width": 465,
      "height": 479,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 14.96,
   "roll": 0,
   "yaw": -168.95,
   "pitch": 2.95
  }
 ],
 "id": "overlay_116CE079_3979_C9F4_41C1_6A995A143999"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": -34.94,
   "yaw": 117.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_7_0_map.gif",
      "width": 58,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -169.91,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "A"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_7_0.png",
      "width": 434,
      "height": 118,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": -34.94,
   "yaw": 117.69,
   "pitch": -169.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0B5DE8DE_3B57_D92D_41B2_E4520D7D79A5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.05,
   "yaw": -49.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_8_0_map.gif",
      "width": 58,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Scribble Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_8_0.png",
      "width": 434,
      "height": 118,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 14.05,
   "yaw": -49.84,
   "pitch": 1.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_14B2EAF9_3B59_FEF4_41B4_2B4FEC5EAEC0"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_3607391A_394E_5B35_41C2_04B1EF66E802_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_513B56F9_43B4_834A_41A7_F1EDA01958BC, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5B5201A1_43BF_81FB_41BD_0338E5719B5E, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.41,
   "yaw": 3.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -0.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 3.76,
   "hfov": 6.41,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.69,
   "image": "this.AnimatedImageResource_5B725196_43BF_81D9_41BB_E9FDAB561EFE",
   "distance": 100
  }
 ],
 "id": "overlay_522ADE47_43B4_8347_41B1_C4861CE0E14E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.74,
   "yaw": 14.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_1_0_map.gif",
      "width": 75,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 13,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Scribble Board"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_1_0.png",
      "width": 1134,
      "height": 240,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 35.74,
   "yaw": 14.19,
   "pitch": 13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1B6BA114_394E_CB3D_41B0_0A60CB212A0A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_5A8DE1BD_43BF_81CB_41C1_AD78FB77F51A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.27,
   "yaw": 175.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_3_0.png",
      "width": 163,
      "height": 163,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.27,
   "yaw": 175.11,
   "pitch": 1.09
  }
 ],
 "id": "overlay_182E55CC_395A_CB2D_41BF_D7F362F1DD09"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 12.51,
   "yaw": 174.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_6_1_0_map.gif",
      "width": 153,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_6_0.png",
      "width": 388,
      "height": 507,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 12.51,
   "roll": 0,
   "yaw": 174.22,
   "pitch": 2.58
  }
 ],
 "id": "overlay_1D35054C_397E_4B2D_4199_50B68FFC2480"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 4.51,
   "yaw": -177.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_7_1_0_map.gif",
      "width": 61,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.62,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_7_0.png",
      "width": 139,
      "height": 451,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 4.51,
   "roll": 0,
   "yaw": -177.98,
   "pitch": 2.62
  }
 ],
 "id": "overlay_2789FC51_397A_B937_4191_627122BAA68C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.76,
   "yaw": -155.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_8_1_0_map.gif",
      "width": 200,
      "height": 185,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.95,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_8_0.png",
      "width": 490,
      "height": 454,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 15.76,
   "roll": 0,
   "yaw": -155.77,
   "pitch": 2.95
  }
 ],
 "id": "overlay_2792D623_397B_C914_41BE_E541CB43865F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 44.1,
   "yaw": 74.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_9_1_0_map.gif",
      "width": 117,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_9_0.png",
      "width": 1201,
      "height": 2048,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 44.1,
   "roll": 0,
   "yaw": 74.99,
   "pitch": -5.97
  }
 ],
 "id": "overlay_175118DF_3B5A_F92B_41B6_40A473BBCB23"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802, this.camera_5AE901CD_43BF_814B_4197_A39F6692F6FB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": 79.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_10_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 79.6,
   "hfov": 9.69,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.51,
   "image": "this.AnimatedImageResource_5120B4E9_4395_874A_41C3_B0280BA5C868",
   "distance": 100
  }
 ],
 "id": "overlay_152780A7_3B5A_491C_41B1_9726AF7ADBCA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 26.03,
   "yaw": 78.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_11_0_map.gif",
      "width": 59,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 4.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Emotions tree"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_11_0.png",
      "width": 808,
      "height": 217,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 26.03,
   "yaw": 78.76,
   "pitch": 4.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1496877D_3B5A_57EF_41AD_B5B52E8741DE"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 36.32,
   "yaw": -102.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_12_1_0_map.gif",
      "width": 137,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_12_0.png",
      "width": 1162,
      "height": 1687,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 36.32,
   "roll": 0,
   "yaw": -102.25,
   "pitch": -2.01
  }
 ],
 "id": "overlay_0F56581F_3B5E_B92B_41A3_5755A2360806"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": -107.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -107.06,
   "hfov": 9.69,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.51,
   "image": "this.AnimatedImageResource_512074E9_4395_874A_41C0_A4857C02E603",
   "distance": 100
  }
 ],
 "id": "overlay_13EF7E95_3B5E_793F_41C2_C184CC5C0147"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 29.3,
   "yaw": -102.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_14_0_map.gif",
      "width": 60,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Storytelling Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_14_0.png",
      "width": 907,
      "height": 240,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 29.3,
   "yaw": -102.13,
   "pitch": 2.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_140C17AE_3B5F_D76D_41CA_EBF99C2F1B1C"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_5A9AF1C5_43BF_81BB_41C3_1B486C17B80E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 5.27,
   "yaw": 175.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_15_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_15_0.png",
      "width": 163,
      "height": 163,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 5.27,
   "yaw": 175.11,
   "pitch": 1.09
  }
 ],
 "id": "overlay_56209463_42C2_BF0C_41CC_AAB59A3BF590"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_519ECE47_43BC_8347_41A2_0526555D929F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5B5461A2_43BF_81F9_41C0_213D211698AF, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.5,
   "yaw": 11.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_16_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.97,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 11.43,
   "hfov": 7.5,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.97,
   "image": "this.AnimatedImageResource_512134E9_4395_874A_419F_2C0320E1EC3A",
   "distance": 100
  }
 ],
 "id": "overlay_5676D196_42C2_D937_41AB_F8EDCA490139"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 37.22,
   "yaw": -10.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_0_1_0_map.gif",
      "width": 200,
      "height": 171,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.88,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_0_0.png",
      "width": 1193,
      "height": 1020,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 37.22,
   "roll": 0,
   "yaw": -10.3,
   "pitch": 5.88
  }
 ],
 "id": "overlay_1F46BF38_3976_5774_418C_6BF2011262DE"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.75,
   "yaw": -58.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_1_1_0_map.gif",
      "width": 137,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_1_0.png",
      "width": 585,
      "height": 851,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 18.75,
   "roll": 0,
   "yaw": -58.91,
   "pitch": 5.09
  }
 ],
 "id": "overlay_1D1F187B_3976_B9EB_41C7_9E22A507C391"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_5B4A4199_43BF_81CB_41AF_8771338B4265.set('selectedIndex', -1); }, this); this.playList_5B4A4199_43BF_81CB_41AF_8771338B4265.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": 18.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_3_0.png",
      "width": 233,
      "height": 233,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.43,
   "yaw": 18.72,
   "pitch": -9.48
  }
 ],
 "id": "overlay_102A7CE5_3949_D91F_41C6_EB735EA64528"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.97,
   "yaw": -132.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -22.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_4_0.png",
      "width": 233,
      "height": 233,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 6.97,
   "yaw": -132.52,
   "pitch": -22.3
  }
 ],
 "id": "overlay_13AF537F_394A_4FEB_41C4_643D884A6B80"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 46.81,
   "yaw": 113.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_6_1_0_map.gif",
      "width": 133,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_6_0.png",
      "width": 1373,
      "height": 2048,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 46.81,
   "roll": 0,
   "yaw": 113.68,
   "pitch": -9.73
  }
 ],
 "id": "overlay_15BB0D2C_3B4F_BB6C_41C6_84D47416F535"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.66,
   "yaw": 114.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 114.27,
   "hfov": 9.66,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -4.77,
   "image": "this.AnimatedImageResource_512844EE_4395_8746_41BA_9D1ADFBD9ED0",
   "distance": 100
  }
 ],
 "id": "overlay_09C0CB01_3B4E_7F14_41CC_87360621593C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.85,
   "yaw": 116.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_8_0_map.gif",
      "width": 47,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Story Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_8_0.png",
      "width": 645,
      "height": 217,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 20.85,
   "yaw": 116.57,
   "pitch": 1.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0C038C08_3B4E_7915_41C4_804107972E0D"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_51B6F806_43BC_8EB9_41BC_D1858B43655C, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5AA9D1A3_43BF_81FF_41C9_1C59B8DC51E3, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.22,
   "yaw": -34.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.77,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -34.54,
   "hfov": 7.22,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.77,
   "image": "this.AnimatedImageResource_512934EE_4395_8746_41A7_02C47390BC75",
   "distance": 100
  }
 ],
 "id": "overlay_56A4523C_42C2_7B7B_41C6_1A2E04CAB525"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_5A1E4209_43BF_82CB_41C1_51761FA5CF2E); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.52,
   "yaw": 174.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_0_0.png",
      "width": 233,
      "height": 233,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.52,
   "yaw": 174.22,
   "pitch": -3.71
  }
 ],
 "id": "overlay_2267F625_395E_491C_41A0_C96742CBCAB9"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 31.31,
   "yaw": 94.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_4_1_0_map.gif",
      "width": 200,
      "height": 134,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.27,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_4_0.png",
      "width": 993,
      "height": 669,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 31.31,
   "roll": 0,
   "yaw": 94.34,
   "pitch": 2.27
  }
 ],
 "id": "overlay_279787AD_397F_F76C_41BC_567EAAA57095"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.03,
   "yaw": 128.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_5_1_0_map.gif",
      "width": 153,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_5_0.png",
      "width": 404,
      "height": 529,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 13.03,
   "roll": 0,
   "yaw": 128.75,
   "pitch": 1.7
  }
 ],
 "id": "overlay_1B4DC94C_397E_BB2D_41C5_257588194E20"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.42,
   "yaw": 94.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_6_0_map.gif",
      "width": 29,
      "height": 15,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Storage"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_6_0.png",
      "width": 447,
      "height": 239,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 14.42,
   "yaw": 94.77,
   "pitch": 5.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_084F2F96_3B59_B73D_41CA_50ADA5AA0C73"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.2,
   "yaw": -129.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_8_1_0_map.gif",
      "width": 103,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_8_0.png",
      "width": 695,
      "height": 1344,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 22.2,
   "roll": 0,
   "yaw": -129.5,
   "pitch": -2.07
  }
 ],
 "id": "overlay_0E1477E2_3B5B_B715_41C7_F3C198C004C3"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 48.57,
   "yaw": -84.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_9_1_0_map.gif",
      "width": 143,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.37,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_9_0.png",
      "width": 1471,
      "height": 2048,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 48.57,
   "roll": 0,
   "yaw": -84.16,
   "pitch": -2.37
  }
 ],
 "id": "overlay_0BC3EC2A_3B5A_D915_4191_7A11FBA3BC0A"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.52,
   "yaw": -126.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_10_0_map.gif",
      "width": 45,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Scribble Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_10_0.png",
      "width": 572,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 18.52,
   "yaw": -126.89,
   "pitch": 2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0B4702F6_3B5A_4EFD_41C8_BDD1993E064D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.69,
   "yaw": -128.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_11_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.05,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -128.65,
   "hfov": 9.69,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -2.05,
   "image": "this.AnimatedImageResource_512FE4EC_4395_874A_41CE_CD8C960807A9",
   "distance": 100
  }
 ],
 "id": "overlay_097B83BD_3B5A_4F6F_41CA_749E3D2C88F8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802, this.camera_5A7D1218_43BF_82C9_41C7_4A4507EABF9F); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.7,
   "yaw": -74.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_12_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 1.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -74.39,
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.22,
   "image": "this.AnimatedImageResource_512F14EC_4395_874A_41AD_7DA2765AF08C",
   "distance": 100
  }
 ],
 "id": "overlay_0AE2BEFB_3B59_D6F4_41B4_00928A6C4D0B"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 16.17,
   "yaw": -75.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_13_0_map.gif",
      "width": 40,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 6.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Emotion tree"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_13_0.png",
      "width": 503,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 16.17,
   "yaw": -75.51,
   "pitch": 6.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_10C4625D_3B56_492F_41BA_C90EE3656BBB"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40, this.camera_5A6F2211_43BF_82DB_41BD_800612E49EA5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.7,
   "yaw": 93.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_14_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 0.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 93.96,
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.41,
   "image": "this.AnimatedImageResource_512C94EC_4395_874A_41D0_0695A72CF9CD",
   "distance": 100
  }
 ],
 "id": "overlay_2EFB3700_3F7C_57C9_41C7_3F95737670D1"
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "items": [
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_1",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.29",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.62"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_2",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.64",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.71"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_3",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.35",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.54"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_5",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.69",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.47"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_6",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.53",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.39"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_7",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.59",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.31"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_8",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.29",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.43"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_9",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.42",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.59"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_10",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.58",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.44"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  },
  {
   "media": "this.album_103B96E0_3B4A_4914_41B1_660E9208A5DB_11",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "zoomFactor": 1,
     "class": "PhotoCameraPosition",
     "y": "0.50"
    },
    "easing": "linear",
    "targetPosition": {
     "x": "0.63",
     "zoomFactor": 1.1,
     "class": "PhotoCameraPosition",
     "y": "0.30"
    },
    "duration": 5000,
    "scaleMode": "fit_outside",
    "class": "MovementPhotoCamera"
   },
   "class": "PhotoPlayListItem"
  }
 ],
 "id": "album_103B96E0_3B4A_4914_41B1_660E9208A5DB_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 55.75,
   "yaw": 6.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_0_1_0_map.gif",
      "width": 158,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.53,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_0_0.png",
      "width": 1624,
      "height": 2048,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 55.75,
   "roll": 0,
   "yaw": 6.41,
   "pitch": -16.53
  }
 ],
 "id": "overlay_298A7556_395E_CB3C_41AA_71525C995BDD"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.97,
   "yaw": 7.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -19.09,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_2_0.png",
      "width": 326,
      "height": 310,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 9.97,
   "yaw": 7.06,
   "pitch": -19.09
  }
 ],
 "id": "overlay_2BEEBFC2_39DB_B715_4198_F24A47E417F6"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 25.55,
   "yaw": 7.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_3_0.png",
      "width": 791,
      "height": 859,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 25.55,
   "yaw": 7.14,
   "pitch": -2.52
  }
 ],
 "id": "overlay_4E87D248_40E4_8013_41CB_08833EC8AA1E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.24,
   "yaw": 7.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_4_0_map.gif",
      "width": 109,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -26.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Saksham Values Lab"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_0_HS_4_0.png",
      "width": 1219,
      "height": 178,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 35.24,
   "yaw": 7.03,
   "pitch": -26.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25
  }
 ],
 "id": "overlay_4E529511_40E4_8030_41C7_B3BF3DF4A744"
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
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#FF9933",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
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
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.54,
   "yaw": 112.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 112.51,
   "hfov": 9.54,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.3,
   "image": "this.AnimatedImageResource_512C34EC_4395_874A_41C4_AFC0DFC40BC4",
   "distance": 100
  }
 ],
 "id": "overlay_1F954BAD_3976_7F6F_41CB_8A783A5550D2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_5AF9D1D4_43BF_8159_41B2_0C04D73E9EB2); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.54,
   "yaw": 148.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.19,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_2_0.png",
      "width": 233,
      "height": 233,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.54,
   "yaw": 148.85,
   "pitch": -1.19
  }
 ],
 "id": "overlay_19ECD474_3976_49FD_41BA_BFA5D09A1160"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 35.28,
   "yaw": 63.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_3_1_0_map.gif",
      "width": 195,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_3_0.png",
      "width": 1127,
      "height": 1152,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 35.28,
   "roll": 0,
   "yaw": 63.68,
   "pitch": 5.84
  }
 ],
 "id": "overlay_1D2D3AEE_397E_5EED_41AF_214622735F80"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.68,
   "yaw": 106.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_4_1_0_map.gif",
      "width": 98,
      "height": 199,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.58,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_4_0.png",
      "width": 300,
      "height": 611,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 9.68,
   "roll": 0,
   "yaw": 106.27,
   "pitch": 2.58
  }
 ],
 "id": "overlay_2783F5FD_397E_4AEF_4183_CD1F399828E4"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 43.35,
   "yaw": -96.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_5_1_0_map.gif",
      "width": 73,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_5_0.png",
      "width": 754,
      "height": 2048,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 43.35,
   "roll": 0,
   "yaw": -96.46,
   "pitch": -4.2
  }
 ],
 "id": "overlay_151C54EF_3B56_4AEB_41BF_1044DD99439E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 18.69,
   "yaw": 105.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_6_0_map.gif",
      "width": 71,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Reflection Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_6_0.png",
      "width": 588,
      "height": 132,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 18.69,
   "yaw": 105.53,
   "pitch": -10.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_14AF353D_3B56_4B6C_41C5_0C3D37560C92"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3, this.camera_5AF681DC_43BF_8149_4191_709ED72E70CA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 9.53,
   "yaw": -106.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_7_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Point 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -106.55,
   "hfov": 9.53,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.8,
   "image": "this.AnimatedImageResource_512D74ED_4395_874A_41C8_FC182A13B1D7",
   "distance": 100
  }
 ],
 "id": "overlay_08CE611B_3B49_CB2B_41CA_EA09FFFEDFA2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.73,
   "yaw": -103.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_8_0_map.gif",
      "width": 58,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.04,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Whispering zone"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_8_0.png",
      "width": 643,
      "height": 177,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 20.73,
   "yaw": -103.91,
   "pitch": -5.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_0FCE7611_3B4A_C937_41AF_E6CEAD0B7252"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.43,
   "yaw": 19.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_9_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 19.22,
   "hfov": 7.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -9.73,
   "image": "this.AnimatedImageResource_512AD4ED_4395_874A_41B0_2DD97B08E1D1",
   "distance": 100
  }
 ],
 "id": "overlay_56B6B794_42C1_D934_41CF_789D6ADF2C08"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_50BEB6E8_43B4_8349_416A_EF8CE7A05908, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5B5D319E_43BF_81C9_41CE_2F4E20B8FC92, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 3.78,
   "yaw": -42.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 22.73,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -42.62,
   "hfov": 3.78,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 22.73,
   "image": "this.AnimatedImageResource_513B04E4_4395_877A_41C7_B97463526205",
   "distance": 100
  }
 ],
 "id": "overlay_2391302F_39F9_C96C_41C3_B5938B6C07E6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776, this.camera_5AC471E3_43BF_817F_41C3_7014C34114CF); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.45,
   "yaw": -88.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.47,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Arrow 05"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -88.8,
   "hfov": 6.45,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.47,
   "image": "this.AnimatedImageResource_513874E6_4395_8746_41AC_1288CFC97DA6",
   "distance": 100
  }
 ],
 "id": "overlay_2F8A81FA_39FE_4AF4_41C7_2B221241773D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36CD60BE_3956_496D_41AF_F08047728783, this.camera_5A2341F2_43BF_8159_41B7_8E27B7DBAAC6); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.46,
   "yaw": -177.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -3.08,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Arrow 05"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -177.62,
   "hfov": 6.46,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.08,
   "image": "this.AnimatedImageResource_5139A4E6_4395_8746_41C2_61558F446AE9",
   "distance": 100
  }
 ],
 "id": "overlay_2FD0A535_39FF_CB7F_41BA_9FB8CEF087CC"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.46,
   "yaw": -134.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -7.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -134.03,
   "hfov": 7.46,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -7.98,
   "image": "this.AnimatedImageResource_513924E6_4395_8746_41C2_6AB593EBAE31",
   "distance": 100
  }
 ],
 "id": "overlay_19B1DDDB_39C9_BB34_41AD_B2ED2D99542C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 22.42,
   "yaw": 68.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_10_1_0_map.gif",
      "width": 200,
      "height": 193,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_10_0.png",
      "width": 702,
      "height": 680,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 22.42,
   "roll": 0,
   "yaw": 68.58,
   "pitch": 2.2
  }
 ],
 "id": "overlay_1EAA557F_3976_CBEB_41C9_218BB69BBC31"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.17,
   "yaw": 115.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_11_1_0_map.gif",
      "width": 200,
      "height": 192,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_11_0.png",
      "width": 662,
      "height": 639,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 21.17,
   "roll": 0,
   "yaw": 115.18,
   "pitch": 2.32
  }
 ],
 "id": "overlay_1D40F5C0_3976_4B15_41CC_A46B2C4A3322"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 27.44,
   "yaw": -1.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_12_1_0_map.gif",
      "width": 136,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_12_0.png",
      "width": 865,
      "height": 1271,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 27.44,
   "roll": 0,
   "yaw": -1.17,
   "pitch": -5.34
  }
 ],
 "id": "overlay_13835188_3B56_4B15_41BD_C4E50A75468D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3, this.camera_5A33E1FA_43BF_8149_41CD_55F3A0EA3A2F); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.35,
   "yaw": -0.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_13_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -10.7,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Artzone HS"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.78,
   "hfov": 6.35,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.7,
   "image": "this.AnimatedImageResource_512634E6_4395_8746_419A_877BD8A54B3B",
   "distance": 100
  }
 ],
 "id": "overlay_1FCEFEB1_3B5A_F977_41C3_B04652201E80"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 20.92,
   "yaw": -0.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_14_0_map.gif",
      "width": 68,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Whispering area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_14_0.png",
      "width": 650,
      "height": 152,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 20.92,
   "yaw": -0.95,
   "pitch": -5.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1C4E9748_3B5B_F715_41B5_B99768F59920"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 28.91,
   "yaw": -47.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_15_1_0_map.gif",
      "width": 122,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -1.57,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_15_0.png",
      "width": 913,
      "height": 1488,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 28.91,
   "roll": 0,
   "yaw": -47.14,
   "pitch": -1.57
  }
 ],
 "id": "overlay_1EB0A9A3_3B5E_7B14_41CA_684EE8CF2531"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3607391A_394E_5B35_41C2_04B1EF66E802, this.camera_5A01D201_43BF_82BB_41C2_86E9021CEAA5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.42,
   "yaw": -45.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_16_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 6.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "BOOK NOOK"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -45.91,
   "hfov": 6.42,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 6.67,
   "image": "this.AnimatedImageResource_5127E4E7_4395_8746_41CF_3310469652D5",
   "distance": 100
  }
 ],
 "id": "overlay_1F566430_3B5E_4975_41C3_379791BF832D"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.07,
   "yaw": -88.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_17_0_map.gif",
      "width": 58,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 0.31,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Scribble Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_17_0.png",
      "width": 434,
      "height": 118,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 14.07,
   "yaw": -88.59,
   "pitch": 0.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_17B765EF_3B59_CAEC_4188_1136BDC48C68"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.6,
   "yaw": -43.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_18_0_map.gif",
      "width": 58,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 11.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Emotions tree"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_18_0.png",
      "width": 428,
      "height": 117,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 13.6,
   "yaw": -43.43,
   "pitch": 11.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_15018261_3B5A_4914_41A2_46A8BF996C74"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.79,
   "yaw": 48.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_19_1_0_map.gif",
      "width": 79,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_19_0.png",
      "width": 459,
      "height": 1149,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 14.79,
   "roll": 0,
   "yaw": 48.15,
   "pitch": -5.17
  }
 ],
 "id": "overlay_16015D08_3B59_DB15_41C1_CFBFA2DE7100"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 21.53,
   "yaw": 69.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_20_0_map.gif",
      "width": 91,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -2.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Storage and playzone"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_20_0.png",
      "width": 666,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 21.53,
   "yaw": 69.2,
   "pitch": -2.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_10CD1F90_3B56_B735_41CA_2756A5DEF98F"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_36CADA49_3956_7914_41BC_C4A69BE34B40, this.camera_5AD541EB_43BF_814F_41BF_110B8BC496D5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 6.43,
   "yaw": 45.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_21_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -5.68,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Arrow 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 45.75,
   "hfov": 6.43,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -5.68,
   "image": "this.AnimatedImageResource_5124D4E7_4395_8746_41CC_05EA07C42E4F",
   "distance": 100
  }
 ],
 "id": "overlay_109717BE_3B57_B76D_41CD_016D2FDE1BE0"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.46,
   "yaw": -176.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_24_0_map.gif",
      "width": 49,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Story Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_24_0.png",
      "width": 477,
      "height": 154,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 15.46,
   "yaw": -176.95,
   "pitch": 2.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_13386816_3B4F_D93C_41B3_E3807DE16D59"
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_507CCF50_43B5_8159_41B0_37F6BF0E333F, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.81,
   "yaw": 64.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_25_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -12.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 64.44,
   "hfov": 2.81,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -12.72,
   "image": "this.AnimatedImageResource_5125C4E7_4395_8746_41D0_79E1ECAE26CA",
   "distance": 100
  }
 ],
 "id": "overlay_51A7EC16_42CE_EF35_41B8_3334DE2DA1E5"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_51060A38_43B4_82C9_41C9_8DB1747E0BBE, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5B51A1A0_43BF_81F9_41C7_77D18037CAAA, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.76,
   "yaw": 104.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_26_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -16.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 104.13,
   "hfov": 2.76,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -16.75,
   "image": "this.AnimatedImageResource_512564E7_4395_8746_41B2_3773BFCD0A36",
   "distance": 100
  }
 ],
 "id": "overlay_56CF589E_42C1_F734_41AE_455045C51AE6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 15.02,
   "yaw": 135.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_27_0_map.gif",
      "width": 70,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -23.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Reflection Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_27_0.png",
      "width": 506,
      "height": 115,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 15.02,
   "yaw": 135.38,
   "pitch": -23.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_57E556FC_42C2_58F4_41AC_93D9D87CEF0C"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_518513E9_43B3_814A_41CD_181FC6D0290E, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_5B5091A0_43BF_81F9_41CA_E52562233A92, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 2.7,
   "yaw": 133.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_28_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -20.63,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 133.67,
   "hfov": 2.7,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -20.63,
   "image": "this.AnimatedImageResource_5B708195_43BF_81DB_41C7_B7BB0705BD26",
   "distance": 100
  }
 ],
 "id": "overlay_517F23A1_439C_81FB_41C2_D76779D93BF3"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Georgia",
 "minHeight": 1,
 "playbackBarHeadBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#FF9933",
 "progressOpacity": 1,
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
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
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "angle": 0,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_360612BC_397A_496D_41A0_E97535E7DA58_tcap0.png",
    "width": 850,
    "height": 850,
    "class": "ImageResourceLevel"
   }
  ]
 },
 "class": "TripodCapPanoramaOverlay",
 "rotate": true,
 "id": "panorama_36CD60BE_3956_496D_41AF_F08047728783_tcap0",
 "distance": 50,
 "hfov": 34.5,
 "inertia": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 14.92,
   "yaw": -134.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_0_1_0_map.gif",
      "width": 166,
      "height": 200,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 4.46,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_0_0.png",
      "width": 464,
      "height": 558,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 14.92,
   "roll": 0,
   "yaw": -134.4,
   "pitch": 4.46
  }
 ],
 "id": "overlay_0DB5C4C2_3B49_C914_41C0_81745A3579C6"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30,
   "yaw": -99.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_1_1_0_map.gif",
      "width": 200,
      "height": 135,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 4.93,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_1_0.png",
      "width": 949,
      "height": 645,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 30,
   "roll": 0,
   "yaw": -99.11,
   "pitch": 4.93
  }
 ],
 "id": "overlay_0D522CEB_3BB6_5AEB_41B3_F01CB8E27A8E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 30.43,
   "yaw": -3.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_4_0_map.gif",
      "width": 69,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Story telling Area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_4_0.png",
      "width": 941,
      "height": 217,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 30.43,
   "yaw": -3.09,
   "pitch": 2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_306AF905_3F6C_3BCA_41C1_C2DEFD23ACC2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.setCameraSameSpotAsMedia(this.camera_5AB1B1B6_43BF_81D9_41C7_12A738B7D44E, this.panorama_36CD60BE_3956_496D_41AF_F08047728783); this.startPanoramaWithCamera(this.panorama_360612BC_397A_496D_41A0_E97535E7DA58, this.camera_5AB1B1B6_43BF_81D9_41C7_12A738B7D44E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.44,
   "yaw": 64.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -9.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_5_0.png",
      "width": 233,
      "height": 235,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 7.44,
   "yaw": 64.44,
   "pitch": -9.26
  }
 ],
 "id": "overlay_4FA2C0D5_40E3_800E_41B2_25B6A34D34EA"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.44,
   "yaw": -3.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -8.98,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -3.39,
   "hfov": 7.44,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -8.98,
   "image": "this.AnimatedImageResource_515674EF_4395_8746_41B5_811135EB4433",
   "distance": 100
  }
 ],
 "id": "overlay_4DCAA15B_42C2_5936_41B7_CA6DCF75C2E8"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A, this.camera_5AA531AE_43BF_81C9_41B0_29BE0ADF5633); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -180,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_8_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": -6.72,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Circle Arrow 02"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -180,
   "hfov": 7.48,
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -6.72,
   "image": "this.AnimatedImageResource_5157B4EF_4395_8746_41AF_29FBF1E603B3",
   "distance": 100
  }
 ],
 "id": "overlay_531D6B3D_42CE_6970_41B7_25F4037EE8D2"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "hfov": 13.91,
   "yaw": 124.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_9_0_map.gif",
      "width": 59,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "pitch": 5.51,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "data": {
  "label": "Scribble area"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_9_0.png",
      "width": 432,
      "height": 116,
      "class": "ImageResourceLevel"
     }
    ]
   },
   "hfov": 13.91,
   "yaw": 124.08,
   "pitch": 5.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 0.25
  }
 ],
 "id": "overlay_5316675A_42C2_D930_4180_85138822BC8D"
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 110,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarMargin": 2,
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
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "85.959%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 3,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "width": 574.16,
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "30.06%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 51,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 3,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set container"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowSpread": 1,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "10%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowSpread": 1,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "10%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowSpread": 1,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "10%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowSpread": 1,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowSpread": 1,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "shadowHorizontalLength": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "10%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": true,
 "shadowVerticalLength": 0,
 "paddingTop": 0,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_0_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5122F4E7_4395_8746_41A0_C214BB8E0822",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_1_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512234E8_4395_874A_41CF_8AA34E39794A",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_2_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512254E8_4395_874A_41BE_5DCDC497F4CE",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512394E8_4395_874A_41B7_35A7FD728253",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3607391A_394E_5B35_41C2_04B1EF66E802_0_HS_9_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5B725196_43BF_81D9_41BB_E9FDAB561EFE",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_10_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5120B4E9_4395_874A_41C3_B0280BA5C868",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_13_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512074E9_4395_874A_41C0_A4857C02E603",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CAD727_3956_D71B_41A0_F9DCED1DD776_0_HS_16_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512134E9_4395_874A_419F_2C0320E1EC3A",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_7_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512844EE_4395_8746_41BA_9D1ADFBD9ED0",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CD392E_3956_5B6C_41AF_CB09C7238B85_0_HS_9_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512934EE_4395_8746_41A7_02C47390BC75",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_11_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512FE4EC_4395_874A_41CE_CD8C960807A9",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_12_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512F14EC_4395_874A_41AD_7DA2765AF08C",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2C94C455_3956_C93F_41CB_4CDE65AE6DF3_0_HS_14_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512C94EC_4395_874A_41D0_0695A72CF9CD",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_1_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512C34EC_4395_874A_41C4_AFC0DFC40BC4",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_7_0.png",
   "width": 1200,
   "height": 1800,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512D74ED_4395_874A_41C8_FC182A13B1D7",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CADA49_3956_7914_41BC_C4A69BE34B40_0_HS_9_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512AD4ED_4395_874A_41B0_2DD97B08E1D1",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_1_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_513B04E4_4395_877A_41C7_B97463526205",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_513874E6_4395_8746_41AC_1288CFC97DA6",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_4_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5139A4E6_4395_8746_41C2_61558F446AE9",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_513924E6_4395_8746_41C2_6AB593EBAE31",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_13_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512634E6_4395_8746_419A_877BD8A54B3B",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_16_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5127E4E7_4395_8746_41CF_3310469652D5",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_21_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5124D4E7_4395_8746_41CC_05EA07C42E4F",
 "colCount": 4,
 "frameCount": 24
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_25_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5125C4E7_4395_8746_41D0_79E1ECAE26CA",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_26_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_512564E7_4395_8746_41B2_3773BFCD0A36",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D658461_39CA_4916_4176_8EDC2E9CF62A_0_HS_28_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5B708195_43BF_81DB_41C7_B7BB0705BD26",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_6_0.png",
   "width": 460,
   "height": 690,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_515674EF_4395_8746_41B5_811135EB4433",
 "colCount": 4,
 "frameCount": 22
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_36CD60BE_3956_496D_41AF_F08047728783_0_HS_8_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "id": "AnimatedImageResource_5157B4EF_4395_8746_41AF_29FBF1E603B3",
 "colCount": 4,
 "frameCount": 24
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareTwitter(window.location.href)",
 "borderSize": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton TWITTER"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "width": 58,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "click": "this.shareFacebook(window.location.href)",
 "borderSize": 0,
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FB"
 }
},
{
 "iconWidth": 32,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 140,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": "15px",
 "label": "PANORAMA LIST",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 4,
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 196,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Montserrat",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": "15px",
 "label": "FLOORPLAN",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button floorplan"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 136,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Montserrat",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": "15px",
 "label": "PHOTOALBUM",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "pressedBackgroundColorRatios": [
  0
 ],
 "borderSize": 0,
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button photoalbum"
 },
 "shadowBlurRadius": 15
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "width": "85%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "width": "50%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "contentOpaque": false,
 "gap": 0,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "contentOpaque": false,
 "gap": 0,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 }
},
{
 "itemMinHeight": 50,
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Montserrat",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "itemVerticalAlign": "top",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "rollOverItemLabelFontColor": "#04A3E1",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "minHeight": 1,
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "propagateClick": false,
 "paddingLeft": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingRight": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "scrollBarColor": "#04A3E1",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "class": "ThumbnailGrid",
 "shadow": false,
 "itemHeight": 156,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 14,
 "itemThumbnailShadow": false,
 "paddingRight": 70,
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadow": true,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemWidth": 220,
 "itemMaxWidth": 1000,
 "itemPaddingBottom": 3,
 "gap": 26,
 "itemLabelFontStyle": "normal",
 "itemMaxHeight": 1000,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "paddingBottom": 70,
 "itemMode": "normal",
 "itemThumbnailBorderRadius": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "width": "85%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "width": "15%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 50,
 "verticalAlign": "top",
 "minWidth": 400,
 "scrollBarOpacity": 0.51,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "contentOpaque": false,
 "gap": 0,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "width": "25%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "width": "55%",
 "scrollBarWidth": 10,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "width": "45%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "paddingRight": 60,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 60,
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "contentOpaque": false,
 "gap": 0,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "class": "IconButton",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 30,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "width": 370,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container arrows"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 30,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 80,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.63vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.63vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": "0%",
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "borderRadius": 0,
 "minHeight": 1,
 "insetBorder": false,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": "0%",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "borderSize": 0,
 "backgroundColorDirection": "vertical",
 "class": "WebFrame",
 "paddingBottom": 0,
 "scrollEnabled": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "WebFrame48191"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 30,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "width": 370,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 80,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.63vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.63vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 80,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.63vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.63vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "width": "100%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
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
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#FF9933",
 "progressOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
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
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum + text 1"
 }
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
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#FF9933",
 "progressOpacity": 1,
 "height": "100%",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
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
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
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
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "class": "IconButton",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "bottom",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "Image",
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Image"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "vertical",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 30,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "width": 370,
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>lorem ipsum:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.64vh;font-family:'Bebas Neue Bold';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "height": "9%",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "fontWeight": "normal",
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "30%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Container separator"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.42vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.65vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.65vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "height": "9%",
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "fontWeight": "normal",
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.73vh;font-family:'Bebas Neue Bold';\">location</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 1</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">address line 2</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:4.63vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "width": 207,
 "pressedBackgroundOpacity": 1,
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "shadowSpread": 1,
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "backgroundColor": [
  "#04A3E1"
 ],
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "fontSize": 34,
 "label": "lorem ipsum",
 "height": 59,
 "pressedBackgroundColorRatios": [
  0
 ],
 "fontStyle": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "layout": "horizontal",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "class": "Button",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "visible": false,
 "iconWidth": 32,
 "fontWeight": "normal",
 "textDecoration": "none",
 "paddingTop": 0,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "45%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.83vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.51vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "80%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "horizontal",
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "class": "Container",
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "- content"
 }
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "horizontalAlign": "left",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 10,
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "class": "HTMLText",
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.42vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.43vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.32vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.32vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:0.55vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.44vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.55vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "paddingBottom": 10,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "paddingLeft": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "layout": "absolute",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "shadow": false,
 "defaultVRPointer": "laser",
 "scripts": {
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } }
 },
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 }
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
