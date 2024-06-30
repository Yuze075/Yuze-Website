---
sidebar_position: 1
---

# Animation Tool

:::tip[Design Tool]
可视化动画配置工具库, 用于配置动画和Inspector函数操作
:::

## Timeline Player

## Action Invoker

* 可视化的队列播放器, 可以**Inspector**面板上配置具有顺序的操作逻辑

### 组件介绍

1. **Action**
    * 可配置的操作的最小单位, 每一个**Action**只完成一个操作, 一个完整的操作通常是由多个不同的**Action**组合而成
    * **Action**通常有两种类型:
        1. 等待类**Action**: 这种**Action**通常都需要等待一段时间才能完成
            1. `Delay`: 延迟一定秒数执行
            2. `DelayFrame`: 延迟一定帧数执行(可以是`Update`, 也可以是`FixedUpdate`)
        2. 立即执行类**Action**: 这种**Action**都是立刻完成, 并且返回(或者执行下一个**Action**)
            1. `UnityEvent`: **Inspector**可配置方法
    * 其他**Action**详细的类型说明请参考[Action](Action.md)

2. **Action Group**
    * 由多个**Action**组合而成, 完成一个完整的操作逻辑
    * **Action Group**也是一种特殊的**Action**, 可以在配置时嵌套使用, 实现各种复杂的功能
    * `isParallel`: 是否为并行运行. 如果为`True`, 则所有的`actions`同时开始执行; 如果为`False`, 则所有的`actions`
      按照顺序一个个单独执行
    * `forceCatchException`: 在一个**Action**触发异常之后, 是否强制捕获当前异常, 继续执行队列. 如果为`True`,
      则在任何时候都会尽可能保证队列执行完成; 如果为`False`, 则在队列中出现异常的时候回直接暂停队列的执行
    * `isRepeat`: 是否在触发之后重复执行此队列, 等待当前任务被取消
    * `repeatCount`: 重复执行队列的次数; 如果小于等于0, 则代表无限循环执行
    * `actions`: **Action Group**配置的所有操作

3. **Action Invoker**
    * 是一个`MonoBehaviour`组件, 可以被直接添加到`GameObject`上
    * 拥有一个`Action List`, 可以在`List`中配置不同的**Action**
    * 每一个**Action**都是单独触发, 单独完成一个小的任务
    * 并且每一个**Action**都可以配置一个`key`(字符串类型), 用于快速索引
    * 方法名称:
        1. `Invoke(int index)`: 基于配置的顺序触发一个**Action**(配置的顺序从0开始)
        2. `Invoke(string key)`: 基于配置的`key`触发一个**Action**
        3. `InvokeWithCancellationToken(int index)`:  基于配置的顺序触发一个带有`CancellationToken`的**Action**
           (配置的顺序从0开始)(带有`CancellationToken`的**Action**可以取消执行)
        4. `InvokeWithCancellationToken(string key)`: 基于配置的`key`触发一个带有`CancellationToken`的**Action**
           (带有`CancellationToken`的**Action**可以取消执行)
            * 其中`key`值有两种类型:
                1. 默认索引`key`: `XXXXX`, 将直接用于查找**Action**, 并且同时作为取消**Action**操作的`key`
                2. 组合索引`key`: `XXXXX-YYYYY`, 将`XXXXX`作为查找**Action**的`key`, 将`YYYYY`作为取消**Action**
                   操作的`key`
        5. `Cancel(int index)`: 基于配置的顺序取消一个**Action**(配置的顺序从0开始)
        6. `Cancel(string key)`: 基于配置的`key`取消一个**Action**或者一组**Action**(如果大量的**Action**
           绑定的是同一个取消`key`, 则会一次性取消一组)

4. **Action Group Invoker**
    * 是一个`MonoBehaviour`组件, 可以被直接添加到`GameObject`上
    * 拥有一个`Action Group List`, 可以在`List`中配置不同的**Action Group**
    * 每一个**Action Group**都是单独触发, 单独完成一个完整的任务
    * 并且每一个**Action Group**都可以配置一个`key`(字符串类型), 用于快速索引
    * 方法名称:
        1. `Invoke(int index)`: 基于配置的顺序触发一个**Action Group**(配置的顺序从0开始)
        2. `Invoke(string key)`: 基于配置的`key`触发一个**Action Group**
        3. `InvokeWithCancellationToken(int index)`:  基于配置的顺序触发一个带有`CancellationToken`的**Action Group**
           (配置的顺序从0开始)(带有`CancellationToken`的**Action Group**可以取消执行)
        4. `InvokeWithCancellationToken(string key)`: 基于配置的`key`触发一个带有`CancellationToken`的**Action Group**
           (带有`CancellationToken`的**Action Group**可以取消执行)
            * 其中`key`值有两种类型:
                1. 默认索引`key`: `XXXXX`, 将直接用于查找**Action Group**, 并且同时作为取消**Action Group**操作的`key`
                2. 组合索引`key`: `XXXXX-YYYYY`, 将`XXXXX`作为查找**Action Group**的`key`, 将`YYYYY`作为取消
                   **Action Group**操作的`key`
        5. `Cancel(int index)`: 基于配置的顺序取消一个**Action Group**(配置的顺序从0开始)
        6. `Cancel(string key)`: 基于配置的`key`取消一个**Action Group**或者一组**Action Group**(如果大量的
           **Action Group**绑定的是同一个取消`key`, 则会一次性取消一组)

### 配置操作

<br/><br/><br/>
:::tip[Code Tool]
通过代码拓展动画工具库
:::

## Timeline Player

## Action Invoker
