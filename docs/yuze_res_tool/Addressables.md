---
sidebar_position: 999
---

* 关于`Addressables`加载和释放对象的逻辑规则

| 加载方式                                | 返回对象            | 支持的回收方式                                                                                                                                                                                                        |
|-------------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Addressables.LoadAssetAsync()`     | 源资源             | `Addressables.Release(源资源/实例化GameObject/AsyncOperationHandle)`                                                                                                                                                 |
| `Addressables.InstantiateAsync()`   | 实例化`GameObject` | `Addressables.Release(源资源/实例化GameObject/AsyncOperationHandle)`<br/>`Addressables.ReleaseInstance(实例化GameObject/AsyncOperationHandle)`                                                                          |
| `AssetReference.LoadAssetAsync()`   | 源资源             | `Addressables.Release(源资源/实例化GameObject/AsyncOperationHandle)`<br/>`AssetReference.ReleaseAsset()`                                                                                                             |
| `AssetReference.InstantiateAsync()` | 实例化`GameObject` | `Addressables.Release(源资源/实例化GameObject/AsyncOperationHandle)`<br/>`Addressables.ReleaseInstance(实例化GameObject/AsyncOperationHandle)`<br/>`AssetReference.ReleaseInstance(实例化GameObject/AsyncOperationHandle)` |
