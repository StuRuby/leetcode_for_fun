/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.40%)
 * Total Accepted:    79.2K
 * Total Submissions: 252.3K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var _x = x.toString();
    var arr = _x.split('');
    var flag = true;
    debugger;
    if (arr[0] === '-') {
        arr = arr.splice(1);
        flag = false;
    }
    arr = arr.reverse();
    if (!flag) arr = ['-'].concat(arr);
    arr = arr.join('');
    var result = Number(arr);
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) result = 0;
    return result;
};


