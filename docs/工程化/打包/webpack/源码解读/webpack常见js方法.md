---
id: 7cb10912f28c1696659c6131b517f27c
title: webpack常见js方法
---

1. 二维数组转一维

   ```js
   //errors是二维数组[[1，2]，[3，4]] => [1,2,3,4]
   errors.reduce((arr, items) => arr.concat(items), [])
   ```

2. 设置获取对象键值

   ```js
   //安全获取obj.a.b.c getProperty(obj,'a.b.c'),若obj.a.b.c获取不到则为undefined
   const getProperty = (obj, path) => {
     let name = path.split('.')
     for (let i = 0; i < name.length - 1; i++) {
       obj = obj[name[i]]
       if (typeof obj !== 'object' || !obj || Array.isArray(obj)) return
     }
     return obj[name.pop()]
   }

   //设置obj.a.b.c=value;若某个值不是对象或者为空、数组,则设置失败
   const setProperty = (obj, path, value) => {
     let name = path.split('.')
     for (let i = 0; i < name.length - 1; i++) {
       if (typeof obj[name[i]] !== 'object' && obj[name[i]] !== undefined)
         return
       if (Array.isArray(obj[name[i]])) return
       if (!obj[name[i]]) obj[name[i]] = {}
       obj = obj[name[i]]
     }
     obj[name.pop()] = value
   }
   ```

3.
