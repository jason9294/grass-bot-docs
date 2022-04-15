# 字典系統
一款可自訂 key-value 的回覆系統

## 系統說明
可設定一個 key 對應 value，其中 key 不可重複，當有人調用 key 時會回傳 value 字串。

## 指令使用
```
/dict add <key> <value> 
    新增一個<key>字典，調用時回傳<value>
    <key>不可與已存在的keys衝突

/dict del <key>
    移除<key>

```