import { Component } from 'react';
import { getBreeds, getDogByBreed } from 'api';
import { BreedSelect } from './BreedSelect';
import { Dog } from './Dog/Dog';
import { DogSkeleton } from './DogSkeleton';
import { StyledBtn } from './App.styled';

export class App extends Component {
  state = {
    breeds: [],
    dog: null,
    selectedBreed: null,
    isLoadingBreeds: false,
    isLoadingDog: false,
    error: null,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoadingBreeds: true });
      const breeds = await getBreeds();
      this.setState({ breeds });
    } catch {
      this.setState({ error: 'Failed to load breeds :(' });
    } finally {
      this.setState({ isLoadingBreeds: false });
    }
  }

  async componentDidUpdate(_, prevState) {
    if (prevState.selectedBreed !== this.state.selectedBreed) {
      this.fetchDog();
    }
  }

  selectBreed = breed => {
    this.setState({ selectedBreed: breed });
  };

  fetchDog = async () => {
    try {
      this.setState({ isLoadingDog: true });
      const dog = await getDogByBreed(this.state.selectedBreed);
      this.setState({ dog });
    } catch {
      this.setState({ error: 'Failed to load dog :(' });
    } finally {
      this.setState({ isLoadingDog: false });
    }
  };

  render() {
    const { dog, breeds, isLoadingBreeds, isLoadingDog, error } = this.state;

    return (
      <div style={{ display: 'grid', gap: 16, padding: 16 }}>
        <BreedSelect
          breeds={breeds}
          isLoading={isLoadingBreeds}
          onSelect={this.selectBreed}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        {isLoadingDog && <DogSkeleton />}
        {dog && !isLoadingDog && (
          <div>
            <Dog dog={dog} />
            <StyledBtn onClick={this.fetchDog}>
              <span>Show different picture</span>
            </StyledBtn>
          </div>
        )}
      </div>
    );
  }
}
