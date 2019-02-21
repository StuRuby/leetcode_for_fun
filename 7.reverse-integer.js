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
    const absoluteNumber = Math.abs(x);
    const maxNumber = Math.pow(2, 31);
    if (x === 0) {
        return 0;
    }

    const isSigned = x > 0 ? false : true;

    const reversedStr = `${absoluteNumber}`
        .split('')
        .reverse()
        .join('');
    const reversedNum = Number(reversedStr);

    if (reversedNum > maxNumber - 1 || -reversedNum < -maxNumber) {
        return 0;
    }
    return isSigned ? -reversedNum : reversedNum;
};
