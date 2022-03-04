
export interface PaginationParams {
    _page : number ;
    _limit : number ;
    _totalRows : number ;
}
export interface ListResponse<T> {
    data : T[] ;
    pagination :PaginationParams  ;
}
export interface ListParams {
    _page? : number ;
    _limit? : number ;
    _order? : 'asc' | 'desc' ;
    _sort? : string ;
    [key:string] : any;
}