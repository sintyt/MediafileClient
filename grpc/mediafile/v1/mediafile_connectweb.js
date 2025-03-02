// @generated by protoc-gen-connect-web v0.8.6 with parameter "import_extension=.js"
// @generated from file mediafile/v1/mediafile.proto (package mediafile.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { GetCamerasRequest, GetCamerasResponse, GetConfigRequest, GetConfigResponse, GetLogRequest, GetLogResponse, GetPhotosRequest, GetPhotosResponse, LoadCameraCacheRequest, LoadCameraCacheResponse, LoadConfigRequest, LoadConfigResponse, LoadLogRequest, LoadLogResponse, LoadPhotoCacheRequest, LoadPhotoCacheResponse, MovePhotosRequest, MovePhotosResponse, SaveCameraCacheRequest, SaveCameraCacheResponse, SaveConfigRequest, SaveConfigResponse, SaveLogRequest, SaveLogResponse, SavePhotoCacheRequest, SavePhotoCacheResponse, SetConfigRequest, SetConfigResponse } from "./mediafile_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * 
 *
 * @generated from service mediafile.v1.MediafileService
 */
export const MediafileService = {
  typeName: "mediafile.v1.MediafileService",
  methods: {
    /**
     * コンフィギュレーションを保存します。
     *
     * @generated from rpc mediafile.v1.MediafileService.SaveConfig
     */
    saveConfig: {
      name: "SaveConfig",
      I: SaveConfigRequest,
      O: SaveConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * コンフィギュレーションを読み込みます。
     *
     * @generated from rpc mediafile.v1.MediafileService.LoadConfig
     */
    loadConfig: {
      name: "LoadConfig",
      I: LoadConfigRequest,
      O: LoadConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * 写真のキャッシュ情報を保存します。
     *
     * @generated from rpc mediafile.v1.MediafileService.SavePhotoCache
     */
    savePhotoCache: {
      name: "SavePhotoCache",
      I: SavePhotoCacheRequest,
      O: SavePhotoCacheResponse,
      kind: MethodKind.Unary,
    },
    /**
     * 写真のキャッシュ情報を読み込みます。
     *
     * @generated from rpc mediafile.v1.MediafileService.LoadPhotoCache
     */
    loadPhotoCache: {
      name: "LoadPhotoCache",
      I: LoadPhotoCacheRequest,
      O: LoadPhotoCacheResponse,
      kind: MethodKind.Unary,
    },
    /**
     * カメラのキャッシュ情報を保存します。
     *
     * @generated from rpc mediafile.v1.MediafileService.SaveCameraCache
     */
    saveCameraCache: {
      name: "SaveCameraCache",
      I: SaveCameraCacheRequest,
      O: SaveCameraCacheResponse,
      kind: MethodKind.Unary,
    },
    /**
     * カメラのキャッシュ情報を読み込みます。
     *
     * @generated from rpc mediafile.v1.MediafileService.LoadCameraCache
     */
    loadCameraCache: {
      name: "LoadCameraCache",
      I: LoadCameraCacheRequest,
      O: LoadCameraCacheResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ログを存します。
     *
     * @generated from rpc mediafile.v1.MediafileService.SaveLog
     */
    saveLog: {
      name: "SaveLog",
      I: SaveLogRequest,
      O: SaveLogResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ログを読み込みます。
     *
     * @generated from rpc mediafile.v1.MediafileService.LoadLog
     */
    loadLog: {
      name: "LoadLog",
      I: LoadLogRequest,
      O: LoadLogResponse,
      kind: MethodKind.Unary,
    },
    /**
     * コンフィギュレーションを取得します。
     *
     * @generated from rpc mediafile.v1.MediafileService.SetConfig
     */
    setConfig: {
      name: "SetConfig",
      I: SetConfigRequest,
      O: SetConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * コンフィギュレーションを設定します。
     *
     * @generated from rpc mediafile.v1.MediafileService.GetConfig
     */
    getConfig: {
      name: "GetConfig",
      I: GetConfigRequest,
      O: GetConfigResponse,
      kind: MethodKind.Unary,
    },
    /**
     * 写真情報を取得します。
     *
     * @generated from rpc mediafile.v1.MediafileService.GetPhotos
     */
    getPhotos: {
      name: "GetPhotos",
      I: GetPhotosRequest,
      O: GetPhotosResponse,
      kind: MethodKind.Unary,
    },
    /**
     * 写真を移動します。
     *
     * @generated from rpc mediafile.v1.MediafileService.MovePhotos
     */
    movePhotos: {
      name: "MovePhotos",
      I: MovePhotosRequest,
      O: MovePhotosResponse,
      kind: MethodKind.Unary,
    },
    /**
     * カメラ情報を取得します。
     *
     * @generated from rpc mediafile.v1.MediafileService.GetCameras
     */
    getCameras: {
      name: "GetCameras",
      I: GetCamerasRequest,
      O: GetCamerasResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ログを取得します。
     *
     * @generated from rpc mediafile.v1.MediafileService.GetLog
     */
    getLog: {
      name: "GetLog",
      I: GetLogRequest,
      O: GetLogResponse,
      kind: MethodKind.Unary,
    },
  }
};

