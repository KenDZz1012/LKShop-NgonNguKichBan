export default class MovieModel {
    public Id: string
    public MovieName: string
    public Poster: string
    public Rating: Number
    public RateCount: Number
    public Category: Array<String>
    public Trailer: Array<String>
    public Director: Array<String>
    public Actor: Array<String>
    public Information: String
    public ReleaseYear: Number
    public InTime: Date
    public Status: String
    public IsTrending: Boolean
    public CreatedBy: String
    public RunTime: String
    public RelatedMovie: Array<String>
    public Language: String
    public Country: String
}

export class MovieFilterModel extends MovieModel { }