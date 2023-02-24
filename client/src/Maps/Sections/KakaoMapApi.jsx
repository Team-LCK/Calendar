import React, {useEffect, useState} from 'react';

const {kakao} = window;

const KakaoMapApi = ({searchPlace}) => {

    const [Places, setPlaces] = useState([]);

    useEffect(()=> {
        var infowindow = new kakao.maps.InfoWindow({zIndex: 1});
        const container = document.getElementById('myMap');
        const options = {
            center : new kakao.maps.LatLng(37.552635722509,126.92436042413),
            level: 3,
        }
        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();

        ps.keywordSearch(searchPlace, placesSearchCB);

        function placesSearchCB(data, status, pagination){
            if(status === kakao.maps.services.Status.OK){
                let bounds = new kakao.maps.LatLngBounds();

                for(let i = 0; i < data.length; i++)
                {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
                displayPagination(pagination);
                setPlaces(data);
            }
        
        function displayPagination(pagination){
            var paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),
            i;

            while(paginationEl.hasChildNodes()){
                paginationEl.removeChild(paginationEl.lastChild)
            }

            for(i=1;i<=pagination.last;i++){
                var el = document.createElement('a')
                el.href="#"
                el.innerHTML=i

                if(i===pagination.current){
                    el.className = 'on'
                }
                else{
                    el.onclick=(function (i){
                        return function(){
                            pagination.gotoPage(i)
                        }
                    })(i)
                }
                fragment.appendChild(el)
            }
            paginationEl.appendChild(fragment)
        }
            

        function displayMarker(place){
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x),
            })

            kakao.maps.event.addListener(marker,'click', function(){
                infowindow.setContent('<div style="padding:5px;font-size:12px;">'+place.place_name+'</div>');
                infowindow.open(map,marker);
            })
        }

        }
    },[searchPlace])

    return(
        <div>
        <div id ="myMap" style={{width:"1000px", height:"400px"}}>

        </div>
            <div id ="result-list">
                {Places.map((item,i) => {
                    <div key ={i} style={{marginTop:'420px'}}>
                      <span>{i + 1}</span>
                        <div>
                            <h5>{item.place_name}</h5>
                            {item.road_address_name ? (
                                <div>
                                    <span>{item.road_address_name}</span>
                                    <span>{item.address_name}</span>
                                </div>
                            ) : (
                                <span>{item.address_name}</span>
                            )}
                            <span>{item.phone}</span>
                            </div>
                        </div>
                })}
            <div id="pagination"></div>
        </div>
        </div>
    )
}



export default KakaoMapApi;