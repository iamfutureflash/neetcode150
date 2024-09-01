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
class TreeNode12 {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
function maxPathSum(root: TreeNode12 | null): number {
    let maxSum = -Infinity;

    const getMaxPath = (node: TreeNode12 | null) => {
        if (node === null) return 0;

        const leftMax = Math.max(getMaxPath(node.left), 0);
        const rightMax = Math.max(getMaxPath(node.right), 0);

        const currentMax = node.val + leftMax + rightMax;

        maxSum = Math.max(currentMax, maxSum);

        return node.val + Math.max(leftMax, rightMax);
    }
    getMaxPath(root);
    return maxSum;
};