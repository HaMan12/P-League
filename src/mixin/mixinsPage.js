export function paginations(pagination, paras, query) {
    const pageSizeChanged = function (size) {
        pagination.pageSize = paras.pageSize = size;
        pagination.currentPage = paras.currentPage = 1;
        if (paras.keyword !== "" || !(paras.searchType || paras.isAdvance)) {
            query();
        } else {
            query(1);
        }
    };

    const changedPage = function (idx) {
        pagination.pageNo = paras.pageNo = pagination.currentPage = paras.currentPage = idx;
        if (paras.keyword !== "" || !(paras.searchType || paras.isAdvance)) {
            query();
        } else {
            query(1);
        }
    };

    const computePagination = function (total) {
        var p = pagination;
        p.total = total;
        p.pageNo = Math.ceil(p.total / p.pageSize);
        if (p.total <= 0) {
            p.total = 0;
            p.startIndex = 0;
        } else {
            p.startIndex = 1 + ((p.currentPage - 1) * p.pageSize);
        }
        p.endIndex = ((p.currentPage) * p.pageSize);
        if (p.endIndex > total) {
            p.endIndex = total;
        }
    };

    const tabChanged = function (idx) {
        paras.filterType = idx;
        pagination.currentPage = paras.currentPage = 1;
        if (paras.isAdvance || paras.searchType) {
            query(1);
        } else {
            query();
        }
    };

    const computeIndex = function (list, p) {
        paras.filterType = idx;
        list.forEach(function (d, i) {
            d.index = ((p.currentPage - 1) * p.pageSize) + i + 1;
        });
    };

    return {
        pageSizeChanged,
        changedPage,
        computePagination,
        tabChanged,
        computeIndex
    };
}