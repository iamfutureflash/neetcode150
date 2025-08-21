
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let result: number[][] = [];
    let temp: number[] = [];
    const fill = (root: TreeNode | null, sum: number) => {
        if (root === null) return;
        temp.push(root.val);
        sum += root.val;
        if (root.left === null && root.right === null && sum === targetSum) {
            result.push([...temp]);
        }
        fill(root.left, sum);
        fill(root.right, sum);
        temp.pop();
    };
    fill(root, 0);
    return result;
};

