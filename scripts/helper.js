class Helper {
<<<<<<< HEAD
  playPauseAndUpdate(song) {
    const duration = player.getDuration();
    $('#time-control .total-time').text ( duration );
    player.playPause(song);
    };

  }
  const helper = new Helper();
=======
  playPauseAndUpdate (song) {
    const duration = player.getDuration();
    $('#time-control .total-time').text( duration );
    player.playPause(song);
  };
}

const helper = new Helper();
>>>>>>> checkpoint-18-sliders
