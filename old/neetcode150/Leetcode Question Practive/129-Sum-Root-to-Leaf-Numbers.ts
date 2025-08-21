/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const solve = (node: TreeNode | null, curr: number): number => {
    if (!node) return 0;
    curr = (curr * 10) + node.val;
    if (!node.left && !node.right) { return curr; }
    let l = solve(node.left, curr);
    let r = solve(node.right, curr);
    return l + r;
};

function sumNumbers(root: TreeNode | null): number {
    return solve(root, 0);
};