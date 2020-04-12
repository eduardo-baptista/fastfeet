import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import { signOut } from '~/store/modules/auth/action';

import api from '~/services/api';

import Avatar from '~/components/Avatar';
import LoadIndicator from '~/components/LoadIndicator';
import { WhiteBackground } from '~/components/Backgrounds';
import FilterOption from './FilterOption';
import DeliveryCard from './DeliveryCard';

import fomatData from '~/utils/formatDeliveriesToList';

import {
  Content,
  Header,
  HeaderInfo,
  HeaderText,
  HeaderName,
  ListHeader,
  Title,
  Filter,
  List,
} from './styles';

export default function Dashboard() {
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [deliveries, setDeliveries] = useState([]);
  const deliveryman = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  const loadDeliveries = useCallback(async () => {
    setLoading(true);
    const response = await api.get(`deliveryman/${deliveryman.id}/deliveries`, {
      params: { finished: finished ? true : '' },
    });
    setDeliveries(fomatData(response.data));
    setLoading(false);
  }, [deliveryman.id, finished]);

  const loadNextPage = async () => {
    if (loading) return;
    setLoading(true);
    const NextPage = page + 1;
    const response = await api.get(`deliveryman/${deliveryman.id}/deliveries`, {
      params: { finished: finished ? true : '', page: NextPage },
    });

    if (response.data.length === 0) {
      setLoading(false);
      return;
    }

    setLoading(false);
    setPage(NextPage);
    setDeliveries((previous) => [...previous, ...fomatData(response.data)]);
  };

  useEffect(() => {
    if (isFocused) loadDeliveries();
  }, [isFocused, loadDeliveries]);

  function handleLogout() {
    dispatch(signOut());
  }

  function handleFilter(filter) {
    setPage(1);
    setFinished(filter);
  }

  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <WhiteBackground>
        <Content>
          <Header>
            <Avatar
              size={68}
              fontSize={31}
              url={deliveryman.avatar?.path}
              name={deliveryman.name}
            />
            <HeaderInfo>
              <HeaderText>Bem vindo de volta,</HeaderText>
              <HeaderName>{deliveryman.name}</HeaderName>
            </HeaderInfo>
            <TouchableOpacity onPressIn={handleLogout}>
              <Icon name="exit-to-app" color="#e74040" size={24} />
            </TouchableOpacity>
          </Header>
          <ListHeader>
            <Title>Entregas</Title>
            <Filter>
              <FilterOption
                isActive={!finished}
                onPress={() => handleFilter(false)}
              >
                Pendentes
              </FilterOption>
              <FilterOption
                isActive={finished}
                onPress={() => handleFilter(true)}
              >
                Entregues
              </FilterOption>
            </Filter>
          </ListHeader>
          <List
            data={deliveries}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <DeliveryCard data={item} />}
            onEndReached={loadNextPage}
            onEndReachedThreshold={0.1}
            ListFooterComponent={() => (loading ? <LoadIndicator /> : null)}
          />
        </Content>
      </WhiteBackground>
    </>
  );
}
