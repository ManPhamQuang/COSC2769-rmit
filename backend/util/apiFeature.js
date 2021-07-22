class ApiFeature {
  constructor(queryObj, mongooseQuery) {
    this.queryObj = queryObj;
    this.mongooseQuery = mongooseQuery;
  }

  // Implement filter logic
  filter() {
    // Remove special field
    const excludedFields = ["sort", "page", "limit"];
    const searchQuery = { ...this.queryObj };
    excludedFields.forEach(field => delete searchQuery[field]);
    const stringQuery = JSON.stringify(searchQuery);
    // Allow mongodb to perform filter with special keywords >(gt),>=(gte),<(lt),<=(lte)
    let output = stringQuery.replace(/(gt|gte|lt|lte)/g, match => `$${match}`);
    let filterObj = JSON.parse(output);
    this.mongooseQuery.find(filterObj);
    return this;
  }

  // Implement sorting logic
  sort() {
    // Default to the newest
    if (!this.queryObj.sort) {
      this.mongooseQuery.sort("-createdAt");
    } else {
      const sort = this.queryObj.sort.replace(/,/g, " ");
      this.mongooseQuery.sort(sort);
    }
    return this;
  }

  // Implement pagination
  pagination() {
    const page = parseInt(this.queryObj.page) || 1;
    const limit = parseInt(this.queryObj.limit) || 6;
    const skip = (page - 1) * limit;
    this.mongooseQuery.limit(limit).skip(skip);
    return this;
  }
}

module.exports = ApiFeature;
