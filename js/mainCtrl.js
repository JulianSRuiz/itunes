angular.module('itunes').controller('mainCtrl', function($scope, itunesService){
  //This is setting up the default behavior of our ng-grid. The important thing to note is
  //the 'data' property. The value is 'songData'. That means ng-grid is looking for songData
  //  on $scope and is putting whatever songData is into the grid.
  //this means when you make your iTunes request, you'll need to get back the information,
  // parse it accordingly, then set it to songData on the scope -> $scope.songData = ...


  $scope.gridOptions = {
      data: 'songData',
      height: '110px',
      sortInfo: {fields: ['Song', 'Artist', 'Collection', 'Type'], directions: ['asc']},
      columnDefs: [
        {field: 'Play', displayName: 'Play', width: '40px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a href="{{row.getProperty(col.field)}}"><img src="http://www.icty.org/x/image/Miscellaneous/play_icon30x30.png"></a></div>'},
        {field: 'Song', displayName: 'Song'},
        {field: 'Artist', displayName: 'Artist'},
        {field: 'Collection', displayName: 'Collection'},
        {field: 'AlbumArt', displayName: 'Album Art', width: '110px', cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><img src="{{row.getProperty(col.field)}}"></div>'},
        {field: 'Type', displayName: 'Type'},
        {field: 'CollectionPrice', displayName: 'Collection Price'},
      ]
  };

  //Our controller is what's going to connect our 'heavy lifting' itunesService with our view (index.html) so our user can see the results they get back from itunes.

  //First inject itunesService into your controller.

    $scope.getArtists = getArtists;



    function getArtists(artistFromSearch) {
        itunesService.getArtists(artistFromSearch)
        .then(function(response) {
          $scope.songData = response;
          console.log("help", $scope.songData);
        })
    }


  // //Now write a function that will call the method on the itunesService that
  // is responsible for getting
  // the data from iTunes, whenever the user clicks the submit button
  // //*remember, that method should be expecting an artist name.
  // The artist name is coming
  // from the input box on index.html, head over there and check
  // if that input box is tied to any
  // specific model we could use.
  // //Also note that that method should be retuning a promise, so you could use
  // .then in this function.

    //Code here


  //Check that the above method is working by entering a name into the input field on your web app,
  // and then console.log the result

    //Code here


  //If everything worked you should see a huge array of objects inside your console.
  // That's great! But unfortunately that's not what ng-grid is expecting. What you need to do now
  //is sort the data you got back to be an object in the following format.
    /*
      AlbumArt: "http://a3.mzstatic.com/us/r30/Features4/v4/22/be/30/22be305b-d988-4525-453c-7203af1dc5a3/dj.srlprmuo.100x100-75.jpg"
      Artist: "Nelly"
      Collection: "Nellyville"
      CollectionPrice: 11.99
      Play: "http://a423.phobos.apple.com/us/r1000/013/Music4/v4/4a/ab/7c/4aab7ce2-9a72-aa07-ac6b-2011b86b0042/mzaf_6553745548541009508.plus.aac.p.m4a"
      Type: "song"
  */
  //the iTunes API is going to give you a lot more details than ng-grid wants.
  // Create a new array and then loop through the iTunes data pushing into your new array
  // objects that look like the above data.

    //Code here


  //Once you have that final data array, you simply need to put it on the scope (or more specifically on the scope as songData). Once you do this ($scope.songData = myFinalArray) then ng-grid will see that and populate the page.

    //Code here

    // var results = {
    //     "wrapperType":"track",
    //     "kind":"song",
    //     "artistId":367987770,
    //     "collectionId":517705569,
    //     "trackId":517705639,
    //     "artistName":"Karmin",
    //     "collectionName":"Hello",
    //     "trackName":"Brokenhearted",
    //     "collectionCensoredName":"Hello",
    //     "trackCensoredName":"Brokenhearted",
    //     "artistViewUrl":"https://itunes.apple.com/us/artist/karmin/id367987770?uo=4",
    //     "collectionViewUrl":"https://itunes.apple.com/us/album/brokenhearted/id517705569?i=517705639&uo=4",
    //     "trackViewUrl":"https://itunes.apple.com/us/album/brokenhearted/id517705569?i=517705639&uo=4",
    //     "previewUrl":"http://a1538.phobos.apple.com/us/r1000/075/Music/18/c5/e8/mzm.fpfrijeq.aac.p.m4a",
    //     "artworkUrl30":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/c3/f9/58/c3f958d7-0452-a3ac-429e-f39adfc5bac7/source/30x30bb.jpg",
    //     "artworkUrl60":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/c3/f9/58/c3f958d7-0452-a3ac-429e-f39adfc5bac7/source/60x60bb.jpg",
    //     "artworkUrl100":"https://is3-ssl.mzstatic.com/image/thumb/Music/v4/c3/f9/58/c3f958d7-0452-a3ac-429e-f39adfc5bac7/source/100x100bb.jpg",
    //     "collectionPrice":6.99,
    //     "trackPrice":1.29,
    //     "releaseDate":"2012-05-04T07:00:00Z",
    //     "collectionExplicitness":"notExplicit",
    //     "trackExplicitness":"notExplicit",
    //     "discCount":1,
    //     "discNumber":1,
    //     "trackCount":8,
    //     "trackNumber":2,
    //     "trackTimeMillis":227147,
    //     "country":"USA",
    //     "currency":"USD",
    //     "primaryGenreName":"Pop",
    //     "isStreamable":true
    // }











});
