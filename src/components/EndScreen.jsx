import { useNavigation } from '@react-navigation/native';
import RoundSummary from './RoundSummary';
import Button from './ui/Button';

const EndScreen = ({ round, won, pointsEarned, totalPoints }) => {
  const navigation = useNavigation();

  const navigateToHistoryButton = (
    <Button
      title="Play the Archives"
      onPress={() => navigation.navigate('ArchiveTab')}
    />
  );

  return (
    <RoundSummary
      round={round}
      won={won}
      pointsEarned={pointsEarned}
      totalPoints={totalPoints}
      nextButton={navigateToHistoryButton}
    />
  );
};

export default EndScreen;