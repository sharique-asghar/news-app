const genericErrorMessage = 'Something Went wrong!'

export const handleApi = (res) => {
    if ( res.statusCode !== 1 ) {
      throw new Error( res.message || genericErrorMessage);
    }
    const { result } = res;
    if (result.status === "ok") {
      return result;
    } else {
      throw new Error( result.error || result.message || genericErrorMessage );
    }
};